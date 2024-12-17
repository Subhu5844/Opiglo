"""
URL configuration for opiglo project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from opiglo_dev.views import *
# from .views import country_detail


urlpatterns = [
    path('admin/', admin.site.urls),
    # path('register/', register_customer, name='register_customer'),
    # path('login/', login_customer, name='login_customer'),
    # path('logout/',logout_customer, name='logout_customer'),
    # path('forgot_password/',forgot_password,name='forgot_password'),
    # path('get-customer-data/', get_customer_data, name='get_customer_data'),
    # path('drivers/register/', register_driver, name='register_driver'),
    # path('drivers/', driver_list, name='driver_list'),
    # path('drivers/<int:driver_id>/', driver_detail, name='driver_detail'),


    ############################################################################
    path("create_admin/", create_admin, name="create_admin"),
    path('country/', country_detail, name='country_list'),  # for all countries
    path('country/<int:country_id>/', country_detail, name='country_detail'),  # for specific country by id
    path('bank/', bank_list_create, name='bank-list-create'),
    path('bank/<int:bank_id>/', bank_detail_update_delete, name='bank-detail-update-delete'),
    path('currency/', currency_list_create, name = "currency_list_create"),
    path('currency/<int:curr_id>/',currency_detail_update_delete, name = "currency_detail_update_delete"),
    path('salutations/', salutation_list_create, name='salutation-list-create'),
    path('salutations/<int:salutation_code_id>/', salutation_detail_update_delete, name='salutation-detail-update-delete'),
    path('fuel-depots/', fuel_depot_list_create, name='fuel-depot-list-create'),
    path('fuel-depots/<int:fuel_depo_id>/', fuel_depot_detail_update_delete, name='fuel-depot-detail-update-delete'),
    path('roles/', role_list_create, name='role-list-create'),
    path('roles/<int:role_id>/', role_detail_update_delete, name='role-detail-update-delete'),
    path('companies/', company_list_create, name='company-list-create'),
    path('companies/<int:company_id>/', company_detail_update_delete, name='company-detail-update-delete'),



    #path('create-customer/', create_customer, name='create_customer'),   # For creating Curtomer/ Users
    path('register/', register_customer, name='register-customer'),
    
     path('login_user/', login_user, name='login_user'),
     path('logout/', logout_user, name='logout_user'),
]
