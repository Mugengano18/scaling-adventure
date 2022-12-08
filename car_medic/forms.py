import requests
from django import forms
from django.contrib.auth.forms import UserCreationForm
import json
from django.db import transaction
from django.http import request

from car_medic.models import User, Customer, Business_owner, Request_service

# iterable
business_type = (
    ("1", "Gas Station"),
    ("2", "Repair shop"),
)


class CustomerSignUpForm(UserCreationForm):
    first_name = forms.CharField(required=True)
    last_name = forms.CharField(required=True)
    phone_number = forms.CharField(required=True)

    class Meta(UserCreationForm.Meta):
        model = User

    @transaction.atomic
    def save(self):
        user = super().save(commit=False)
        user.is_customer = True
        user.first_name = self.cleaned_data.get('first_name')
        user.last_name = self.cleaned_data.get('last_name')
        user.save()
        customer = Customer.objects.create(user=user)
        customer.phone_number = self.cleaned_data.get('phone_number')
        customer.save()
        return user


class BusinessSignUpForm(UserCreationForm):
    first_name = forms.CharField(required=True)
    last_name = forms.CharField(required=True)
    phone_number = forms.CharField(required=True)
    business_type = forms.ChoiceField(choices=business_type, required=True)

    class Meta(UserCreationForm.Meta):
        model = User

    @transaction.atomic
    def save(self):
        user = super().save(commit=False)
        user.is_employee = True
        user.is_staff = True
        user.first_name = self.cleaned_data.get('first_name')
        user.last_name = self.cleaned_data.get('last_name')
        user.save()
        # make requests from api.ipify.org
        ip = requests.get('https://api.ipify.org?format=json')
        ip_data = json.loads(ip.text)
        # make requests from ip-api.com
        res = requests.get('http://ip-api.com/json/' + ip_data["ip"])
        data_one = json.loads(res.text)
        business_owner = Business_owner.objects.create(user=user)
        business_owner.phone_number = self.cleaned_data.get('phone_number')
        business_owner.business_type = self.cleaned_data.get('business_type')
        business_owner.latitude = data_one['lat']
        business_owner.longitude = data_one['lon']
        business_owner.save()
        return user


class ServiceForm(forms.ModelForm):
    class Meta:
        model = Request_service
        fields = ['service_type', 'request_sender', 'phone_number', 'description']
