from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.

class User(AbstractUser):
    is_customer = models.BooleanField(default=False)
    is_business = models.BooleanField(default=False)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)


class Customer(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, primary_key=True)
    phone_number = models.CharField(max_length=10)
    location = models.CharField(max_length=100)

    def __str__(self):
        return self.user


class Business_owner(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, primary_key=True)
    phone_number = models.CharField(max_length=10)
    location = models.CharField(max_length=100)

    def __str__(self):
        return self.user


class status(models.Model):
    status_id = models.IntegerField(primary_key=True, auto_created=True)
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name


class Request_service(models.Model):
    services_id = models.IntegerField(primary_key=True, auto_created=True)
    service_type = models.CharField(
        max_length=30, default='0', blank=True, null=True)
    request_sender = models.CharField(
        max_length=30, default='0', blank=True, null=True)
    phone_number = models.CharField(max_length=10, blank=True, null=True)
    description = models.CharField(max_length=30, default='0', null=False)
    status = models.ForeignKey(status, on_delete=models.CASCADE, default="1")
    created_at = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return self.request_sender
