from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.decorators import login_required
from django.shortcuts import redirect, render
from django.contrib import messages
from django.views.generic import CreateView
from django.contrib.auth.forms import AuthenticationForm
from .forms import CustomerSignUpForm, BusinessSignUpForm
from .models import User, Request_service


def index(request):
    return render(request, 'index.html')


def contact(request):
    return render(request, "contact.html")


class customer_register(CreateView):
    model = User
    form_class = CustomerSignUpForm
    template_name = 'customer_register.html'

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
        return redirect('home')


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

        return redirect('req_service')
    return render(request, "request_form.html")
