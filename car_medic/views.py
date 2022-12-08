import json
import folium
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.decorators import login_required
import requests
from django.contrib.messages.views import SuccessMessageMixin
from django.shortcuts import redirect, render
from django.contrib import messages
from django.urls import reverse_lazy
from django.views.generic import CreateView
from django.contrib.auth.forms import AuthenticationForm
from .forms import CustomerSignUpForm, BusinessSignUpForm
from .models import User, Request_service, Business_owner, Customer


def index(request):
    return render(request, 'index.html')


def contact(request):
    return render(request, "contact.html")


class customer_register(SuccessMessageMixin, CreateView):
    model = User
    form_class = CustomerSignUpForm
    template_name = 'customer_register.html'
    success_url = reverse_lazy('login')
    success_message = "Successfully created account please login"

    def validation(self, form):
        user = form.save()
        login(self.request, user)
        return redirect('home')


class business_register(CreateView):
    model = User
    form_class = BusinessSignUpForm
    template_name = 'business_register.html'

    def form_valid(self, form):
        user = form.save()
        login(self.request, user)
        return redirect('details')


def login_request(request):
    if request.method == 'POST':
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('/')
            else:
                messages.error(request, "Invalid username or password")
        else:
            messages.error(request, "Invalid username or password")
    return render(request, 'login_form.html',
                  context={'form': AuthenticationForm()})


def logout_view(request):
    logout(request)
    messages.success(request, 'Logged out successfully!')
    return redirect('login')


@login_required(login_url='login')
def request_help(request):
    if request.method == 'POST':
        request_sender = request.POST.get('request_by')
        phone_n = request.POST.get('number')
        service_type = request.POST.get('service_type')
        description = request.POST.get('description')
        obj = Request_service()
        obj.service_type = service_type
        obj.request_sender = request_sender
        obj.phone_number = phone_n
        obj.description = description
        print(service_type)
        print(description)
        obj.save()

        return redirect('req_details')
    return render(request, "request_form.html", context={'phone_num': Customer.phone_number})


@login_required(login_url='login')
def request_det(request):
    bus_list = Business_owner.objects.all()
    print(bus_list)
    context = {'bus_info': bus_list, }
    return render(request, "request_details.html", context)


@login_required(login_url='login')
def business_details(request):
    if request.method == 'POST':
        stat_id = request.POST.get('s_id')
        stat_id_2 = request.POST.get('f_id')
        print(stat_id_2)
        Request_service.objects.filter(services_id=stat_id).update(
            status="2")
        Request_service.objects.filter(services_id=stat_id_2).update(
            status="3")
    request_list = Request_service.objects.all()
    status_open = Request_service.objects.filter(status="1")
    status_active = Request_service.objects.filter(status="2")
    status_finished = Request_service.objects.filter(status="3")
    print(status_finished)
    context = {'info': request_list, "status_open": status_open, "status_active": status_active,
               "status_finished": status_finished}
    return render(request, "business_dashboard.html", context)


def business_details_id(request, pk):
    service_one = Request_service.objects.get(id=pk)
    return render(request, 'business_dashboard.html', {'service': service_one})


def popup_html(row):
    i = row

    phone_number = i["phone_number"]
    business_type = i["business_type"]
    city = i["city"]
    district = i["district"]
    sector = i["sector"]
    left_col_color = "#3e95b5"
    right_col_color = "#f2f9ff"

    html = """
    <!DOCTYPE html>
    <html>
    <center> <table style="height: 126px; width: 305px;">
    <tbody>
    <tr>
    <td style="background-color: """ + left_col_color + """;"><span style="color: #ffffff;">Business Name: </span></td>
    <td style="width: 150px;background-color: """ + right_col_color + """;">""" + + """</td>
    </tr>
    <tr>
    <td style="background-color: """ + left_col_color + """;"><span style="color: #ffffff;">Business Type: </span></td>
    <td style="width: 150px;background-color: """ + right_col_color + """;">""" + business_type + """</td>
    </tr>
    <tr>
    <td style="background-color: """ + left_col_color + """;"><span style="color: #ffffff;">Phone Number: </span></td>
    <td style="width: 150px;background-color: """ + right_col_color + """;">""" + phone_number + """</td>
    </tr>
    <tr>
    <td style="background-color: """ + left_col_color + """;"><span style="color: #ffffff;">City: </span></td>
    <td style="width: 150px;background-color: """ + right_col_color + """;">""" + city + """</td>
    </tr>
    <tr>
    <td style="background-color: """ + left_col_color + """;"><span style="color: #ffffff;">District: </span></td>
    <td style="width: 150px;background-color: """ + right_col_color + """;">""" + district + """</td>
    </tr>
    <tr>
    <td style="background-color: """ + left_col_color + """;"><span style="color: #ffffff;">Sector: </span></td>
    <td style="width: 150px;background-color: """ + right_col_color + """;">""" + sector + """</td>
    </tr>
    </tbody>
    </table></center>
    </html>
    """
    return html


@login_required(login_url='login')
def map_location(request):
    # make requests from api.ipify.org
    ip = requests.get('https://api.ipify.org?format=json')
    ip_data = json.loads(ip.text)
    # make requests from ip-api.com
    res = requests.get('http://ip-api.com/json/' + ip_data["ip"])
    data_one = json.loads(res.text)

    data_list = Business_owner.objects.all()

    for information in data_list:
        map1 = folium.Map(location=[data_one['lat'], data_one['lon']], zoom_start=17, tiles='OpenStreetMap')
        folium.Marker([data_one['lat'], data_one['lon']], tooltip='Click for more', popup="Your location",
                      icon=folium.Icon(color="red", icon='home', prefix='fa')).add_to(map1)
        bus_type = information.business_type
        if bus_type == '1':
            color = 'orange'

        elif bus_type == '2':
            color = 'gray'
        else:
            color = 'black'
        # html = popup_html(data_list[i])
        # popup = folium.Popup(folium.Html(html, script=True), max_width=500)
        name = information.user
        labels = information.business_type
        lat = information.latitude
        long = information.longitude
        folium.Marker([lat, long], tooltip='Click for more', popup=name,
                      icon=folium.Icon(color=color, icon='car', prefix='fa')).add_to(map1)
    map1 = map1._repr_html_()

    context = {
        'map1': map1,
    }
    return render(request, "map.html", context)
