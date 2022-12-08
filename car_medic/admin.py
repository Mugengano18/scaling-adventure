from django.contrib import admin
from .models import User, Customer, Business_owner, Request_service, status

# Register your models here.


admin.site.register(User)
admin.site.register(Customer)
admin.site.register(Business_owner)
admin.site.register(Request_service)
admin.site.register(status)