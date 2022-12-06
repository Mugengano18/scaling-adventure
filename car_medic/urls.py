from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='home'),
    path('contact/', views.contact, name="contact"),
    path('customer_register/', views.customer_register.as_view(), name="c_register"),
    path('business_register/', views.business_register.as_view(), name="b_register"),
    path('login/', views.login_request, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path("request_help/", views.request_help, name="req_service"),

]
