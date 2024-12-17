# from django.db import models
# from django.utils.timezone import now
# from datetime import timedelta


# # Create your models here.

# class Customer(models.Model):
#     name = models.CharField(max_length=100)
#     position = models.CharField(max_length=50, choices=[
#         ('Manager', 'Manager'),
#         ('Developer', 'Developer'),
#         ('Designer', 'Designer'),
#         ('Other', 'Other'),
#     ])
#     company_name = models.CharField(max_length=150)
#     email = models.EmailField(unique=True)
#     contact_work_no = models.CharField(max_length=15)
#     registration_no = models.CharField(max_length=20)
#     vat_no = models.CharField(max_length=20)
#     physical_address = models.TextField()
#     payment_method = models.CharField(max_length=50, choices=[
#         ('Credit Card', 'Credit Card'),
#         ('PayPal', 'PayPal'),
#         ('Bank Transfer', 'Bank Transfer'),
#     ])
#     password = models.CharField(max_length=128)
#     # Add 6 additional fields for future use
#     field1 = models.CharField(max_length=100, blank=True, null=True)
#     field2 = models.CharField(max_length=100, blank=True, null=True)
#     field3 = models.CharField(max_length=100, blank=True, null=True)
#     field4 = models.CharField(max_length=100, blank=True, null=True)
#     field5 = models.CharField(max_length=100, blank=True, null=True)
#     field6 = models.CharField(max_length=100, blank=True, null=True)

#     def __str__(self):
#         return self.name
    







# class Driver(models.Model):
#     LICENSE_CODE_CHOICES = [
#         ('A', 'A'),
#         ('A1', 'A1'),
#         ('B', 'B'),
#         ('B1', 'B1'),
#         ('C1', 'C1'),
#         ('C', 'C'),
#         ('EB', 'EB'),
#         ('EC', 'EC'),
#         ('EC1', 'EC1'),
#         ('Other', 'Other'),
#     ]

#     name = models.CharField(max_length=255)
#     surname = models.CharField(max_length=255)
#     company_name = models.CharField(max_length=255)
#     email = models.EmailField(unique=True,)
#     mobile_no = models.CharField(max_length=15,)
#     whatsapp_no = models.CharField(max_length=15, blank=True, null=True)
#     id_number = models.CharField(max_length=50)
#     staff_number = models.CharField(max_length=50, blank=True, null=True)
#     passport_number = models.CharField(max_length=50)
#     license_code = models.CharField(max_length=10, choices=LICENSE_CODE_CHOICES)

#     def __str__(self):
#         return f"{self.name} {self.surname}"






# New Updated DBS
                        # Master Tables

from django.db import models
from django.contrib.auth.models import AbstractBaseUser


class CountryDetail(models.Model):
    country_id = models.AutoField(primary_key=True)
    country_name = models.CharField(max_length=255)
    country_code = models.CharField(max_length=10, unique=True)
    telephone_code = models.IntegerField()
    attribute1 = models.CharField(max_length=255, blank=True, null=True)
    attribute2 = models.CharField(max_length=255, blank=True, null=True)
    attribute3 = models.CharField(max_length=255, blank=True, null=True)
    attribute4 = models.CharField(max_length=255, blank=True, null=True)
    attribute5 = models.CharField(max_length=255, blank=True, null=True)
    attribute6 = models.CharField(max_length=255, blank=True, null=True)
    created_on = models.DateField(auto_now_add=True)
    created_by_user_id = models.IntegerField()
    updated_on = models.DateField(auto_now=True)
    updated_by_user_id = models.IntegerField(blank=True, null=True)
    language_code = models.CharField(max_length=10, blank=True, null=True)
    soft_delete = models.BooleanField(default=False)

    class Meta:
        db_table = 'opiglo_country_detail'
        # managed = False



class BankDetail(models.Model):
    bank_id = models.AutoField(primary_key=True)
    bank_name = models.CharField(max_length=255)
    bank_code = models.CharField(max_length=50)
    country_code = models.ForeignKey(CountryDetail, on_delete=models.CASCADE, to_field='country_code', db_column='country_code')
    attribute1 = models.CharField(max_length=255, blank=True, null=True)
    attribute2 = models.CharField(max_length=255, blank=True, null=True)
    attribute3 = models.CharField(max_length=255, blank=True, null=True)
    attribute4 = models.CharField(max_length=255, blank=True, null=True)
    attribute5 = models.CharField(max_length=255, blank=True, null=True)
    attribute6 = models.CharField(max_length=255, blank=True, null=True)
    created_on = models.DateField(auto_now_add=True)
    created_by_user_id = models.IntegerField()
    updated_on = models.DateField(blank=True, null=True,auto_now=True)
    updated_by_user_id = models.IntegerField(blank=True, null=True)
    language_code = models.CharField(max_length=10, blank=True, null=True)
    soft_delete = models.BooleanField(default=False)

    class Meta:
        db_table = 'opiglo_bank_detail'
        # managed = False


class CurrencyDetail(models.Model):
    currency_id = models.AutoField(primary_key=True)
    currency_code = models.CharField(max_length=10)
    country_code = models.ForeignKey(CountryDetail, on_delete=models.CASCADE, to_field='country_code', db_column='country_code')
    attribute1 = models.CharField(max_length=255, blank=True, null=True)
    attribute2 = models.CharField(max_length=255, blank=True, null=True)
    attribute3 = models.CharField(max_length=255, blank=True, null=True)
    attribute4 = models.CharField(max_length=255, blank=True, null=True)
    attribute5 = models.CharField(max_length=255, blank=True, null=True)
    attribute6 = models.CharField(max_length=255, blank=True, null=True)
    created_on = models.DateField(auto_now_add=True)
    created_by_user_id = models.IntegerField()
    updated_on = models.DateField(blank=True, null=True,auto_now=True)
    updated_by_user_id = models.IntegerField(blank=True, null=True)
    language_code = models.CharField(max_length=10, blank=True, null=True)
    soft_delete = models.BooleanField(default=False)

    class Meta:
        db_table = 'opiglo_currency_detail'
        # managed = False


class SalutationCode(models.Model):
    salutation_code_id = models.AutoField(primary_key=True)
    salutation_code_name = models.CharField(max_length=255)
    salutation_description = models.CharField(max_length=255, blank=True, null=True)
    created_on = models.DateField(auto_now_add=True)
    created_by_user_id = models.IntegerField()
    updated_on = models.DateField(blank=True, null=True,auto_now=True)
    updated_by_user_id = models.IntegerField(blank=True, null=True)
    language_code = models.CharField(max_length=10, blank=True, null=True)
    soft_delete = models.BooleanField(default=False)
    attribute1 = models.CharField(max_length=255, blank=True, null=True)
    attribute2 = models.CharField(max_length=255, blank=True, null=True)
    attribute3 = models.CharField(max_length=255, blank=True, null=True)
    attribute4 = models.CharField(max_length=255, blank=True, null=True)
    attribute5 = models.CharField(max_length=255, blank=True, null=True)
    attribute6 = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        db_table = 'opiglo_salutation_code'
        # managed = False


class FuelDepotDetail(models.Model):
    fuel_depo_id = models.AutoField(primary_key=True)
    fuel_depo_name = models.CharField(max_length=255)
    country_code = models.ForeignKey(CountryDetail, on_delete=models.CASCADE, to_field='country_code', db_column='country_code')
    location = models.CharField(max_length=255)
    attribute1 = models.CharField(max_length=255, blank=True, null=True)
    attribute2 = models.CharField(max_length=255, blank=True, null=True)
    attribute3 = models.CharField(max_length=255, blank=True, null=True)
    attribute4 = models.CharField(max_length=255, blank=True, null=True)
    attribute5 = models.CharField(max_length=255, blank=True, null=True)
    attribute6 = models.CharField(max_length=255, blank=True, null=True)
    created_on = models.DateField(auto_now_add=True)
    created_by_user_id = models.IntegerField()
    updated_on = models.DateField(blank=True, null=True,auto_now=True)
    updated_by_user_id = models.IntegerField(blank=True, null=True)
    language_code = models.CharField(max_length=10, blank=True, null=True)
    soft_delete = models.BooleanField(default=False)

    class Meta:
        db_table = 'opiglo_fuel_depo_detail'
        # managed = False


class RoleDetail(models.Model):
    role_id = models.AutoField(primary_key=True)
    role_code = models.CharField(max_length=50)
    role_description = models.CharField(max_length=255)
    created_on = models.DateField(auto_now_add=True)
    created_by_user_id = models.IntegerField()
    updated_on = models.DateField(blank=True, null=True,auto_now=True)
    updated_by_user_id = models.IntegerField(blank=True, null=True)
    language_code = models.CharField(max_length=10, blank=True, null=True)
    soft_delete = models.BooleanField(default=False)
    attribute1 = models.CharField(max_length=255, blank=True, null=True)
    attribute2 = models.CharField(max_length=255, blank=True, null=True)
    attribute3 = models.CharField(max_length=255, blank=True, null=True)
    attribute4 = models.CharField(max_length=255, blank=True, null=True)
    attribute5 = models.CharField(max_length=255, blank=True, null=True)
    attribute6 = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        db_table = 'opiglo_role_detail'
        # managed = False


class UserCompanyDetails(models.Model):
    company_id = models.AutoField(primary_key=True)
    company_name = models.CharField(max_length=255)
    company_code = models.CharField(max_length=50)
    created_on = models.DateField(auto_now_add=True)
    created_by_user_id = models.IntegerField()
    updated_on = models.DateField(blank=True, null=True,auto_now=True)
    updated_by_user_id = models.IntegerField(blank=True, null=True)
    language_code = models.CharField(max_length=10, blank=True, null=True)
    soft_delete = models.BooleanField(default=False)
    attribute1 = models.CharField(max_length=255, blank=True, null=True)
    attribute2 = models.CharField(max_length=255, blank=True, null=True)
    attribute3 = models.CharField(max_length=255, blank=True, null=True)
    attribute4 = models.CharField(max_length=255, blank=True, null=True)
    attribute5 = models.CharField(max_length=255, blank=True, null=True)
    attribute6 = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        db_table = 'opiglo_user_company_details'
        # managed = False


class AdminDetail(models.Model):
    admin_id = models.AutoField(primary_key=True)
    salutation_code = models.ForeignKey(
        'SalutationCode',  # Reference the SalutationCode model
        on_delete=models.CASCADE,
        db_column='Salution_code'  # Use the specified column name in the database
    )
    full_name = models.CharField(max_length=255)
    telephone_number = models.BigIntegerField()  # Changed to BigIntegerField for larger phone numbers
    whatsapp_number = models.BigIntegerField()  # Changed to BigIntegerField for consistency
    password = models.CharField(max_length=30)
    attribute1 = models.CharField(max_length=255, blank=True, null=True)
    attribute2 = models.CharField(max_length=255, blank=True, null=True)
    attribute3 = models.CharField(max_length=255, blank=True, null=True)
    attribute4 = models.CharField(max_length=255, blank=True, null=True)
    attribute5 = models.CharField(max_length=255, blank=True, null=True)
    attribute6 = models.CharField(max_length=255, blank=True, null=True)
    created_on = models.DateField(auto_now_add=True)
    created_by_user_id = models.IntegerField()
    updated_on = models.DateField(auto_now=True)
    updated_by_user_id = models.IntegerField(blank=True, null=True)
    language_code = models.CharField(max_length=10, blank=True, null=True)
    soft_delete = models.BooleanField(default=False)


    

    class Meta:
        db_table = 'opiglo_admin_detail'




                             # Transaction_Tables & Extended Table Creation and Relationships

class CustomerDetail(models.Model):
    customer_id = models.AutoField(primary_key=True)
    salutation_code = models.ForeignKey(SalutationCode, on_delete=models.CASCADE, db_column='Salution_code')
    name = models.CharField(max_length=255)
    position = models.CharField(max_length=50, choices=[
         ('Owner', 'Owner'),
         ('Director', 'Director'),
         
     ])
    company = models.ForeignKey(UserCompanyDetails, on_delete=models.CASCADE, db_column='Company_id')
    email = models.EmailField(unique=True)
    country_code = models.ForeignKey(CountryDetail, on_delete=models.CASCADE, db_column='Country_Code')
    contact_work_number = models.BigIntegerField(null=True, blank=True)  # Added for work number
    whatsapp_number = models.BigIntegerField()
    registration_no = models.CharField(max_length=50, null=True, blank=True)  # Added Registration No.
    vat_no = models.CharField(max_length=50, null=True, blank=True)  # Added VAT No.
    physical_address = models.TextField(null=True, blank=True)  # Added Physical Address
    payment_method = models.CharField(max_length=50,null=True , blank=True)
    bank_code = models.CharField(max_length=50)
    bank_account_number = models.CharField(max_length=50)
    opiglo_prepaid_balance = models.IntegerField()
    currency_code = models.CharField(max_length=10)
    selected_payment_method = models.CharField(max_length=50,null=True,blank=True)
    role = models.ForeignKey(RoleDetail, on_delete=models.CASCADE, db_column='Role_id')
    password = models.CharField(max_length=128)  # Added for password storage (hash it securely)

    attribute1 = models.CharField(max_length=255, blank=True, null=True)
    attribute2 = models.CharField(max_length=255, blank=True, null=True)
    attribute3 = models.CharField(max_length=255, blank=True, null=True)
    attribute4 = models.CharField(max_length=255, blank=True, null=True)
    attribute5 = models.CharField(max_length=255, blank=True, null=True)
    attribute6 = models.CharField(max_length=255, blank=True, null=True)
    created_on = models.DateField(auto_now_add=True)
    created_by_user_id = models.IntegerField(null=False)
    updated_on = models.DateField(auto_now=True)
    updated_by_user_id = models.IntegerField(blank=True, null=True)
    language_code = models.CharField(max_length=10, blank=True, null=True)
    soft_delete = models.BooleanField(default=False)

    class Meta:
        db_table = 'opiglo_customer_detail'


class CustomerTransactionDetail(models.Model):
    account_transaction_id = models.AutoField(primary_key=True)
    company = models.ForeignKey(UserCompanyDetails, on_delete=models.CASCADE, db_column='Company_id')
    transaction_type_code = models.CharField(max_length=50)
    amount = models.IntegerField()
    source_bank_code = models.CharField(max_length=50)
    source_account_number = models.BigIntegerField()
    source_country_code = models.ForeignKey(CountryDetail, on_delete=models.CASCADE, db_column='Source_Country_Code', related_name='source_country')
    target_bank_code = models.ForeignKey(BankDetail, on_delete=models.CASCADE, db_column='Target_Bank_code')
    target_account_number = models.BigIntegerField()
    target_country_code = models.ForeignKey(CountryDetail, on_delete=models.CASCADE, db_column='Target_Country_Code', related_name='target_country')
    wp_otp = models.IntegerField()
    attribute1 = models.CharField(max_length=255, blank=True, null=True)
    attribute2 = models.CharField(max_length=255, blank=True, null=True)
    attribute3 = models.CharField(max_length=255, blank=True, null=True)
    attribute4 = models.CharField(max_length=255, blank=True, null=True)
    attribute5 = models.CharField(max_length=255, blank=True, null=True)
    attribute6 = models.CharField(max_length=255, blank=True, null=True)
    created_on = models.DateField(auto_now_add=True)
    created_by_user_id = models.IntegerField()
    updated_on = models.DateField(auto_now=True)
    updated_by_user_id = models.IntegerField(blank=True, null=True)
    language_code = models.CharField(max_length=10, blank=True, null=True)
    soft_delete = models.BooleanField(default=False)
 
    class Meta:
        db_table = 'opiglo_customer_transaction_detail'


class CustomerInvoiceDetail(models.Model):
    invoice_id = models.AutoField(primary_key=True)
    company = models.ForeignKey(UserCompanyDetails, on_delete=models.CASCADE, db_column='Company_id')
    invoice_type_code = models.CharField(max_length=50)

    class Meta:
        db_table = 'opiglo_customer_invoice_detail'


class CustomerVehicleDetail(models.Model):
    truck_id = models.AutoField(primary_key=True)
    truck_code = models.CharField(max_length=50)
    truck_registration_number = models.CharField(max_length=50)
    company = models.ForeignKey(UserCompanyDetails, on_delete=models.CASCADE, db_column='Company_id')
    truck_manufacture_name = models.CharField(max_length=255)
    truck_fuel_capacity = models.IntegerField()
    fleet_number = models.CharField(max_length=50)
    attribute1 = models.CharField(max_length=255, blank=True, null=True)
    attribute2 = models.CharField(max_length=255, blank=True, null=True)
    attribute3 = models.CharField(max_length=255, blank=True, null=True)
    attribute4 = models.CharField(max_length=255, blank=True, null=True)
    attribute5 = models.CharField(max_length=255, blank=True, null=True)
    attribute6 = models.CharField(max_length=255, blank=True, null=True)
    created_on = models.DateField(auto_now_add=True)
    created_by_user_id = models.IntegerField()
    updated_on = models.DateField(auto_now=True)
    updated_by_user_id = models.IntegerField(blank=True, null=True)
    language_code = models.CharField(max_length=10, blank=True, null=True)
    soft_delete = models.BooleanField(default=False)

    class Meta:
        db_table = 'opiglo_customer_vehicle_detail'


class CustomerDriverDetail(models.Model):
    driver_id = models.AutoField(primary_key=True)
    truck = models.ForeignKey(CustomerVehicleDetail, on_delete=models.CASCADE, db_column='Truck_ID')
    salutation_code = models.ForeignKey(SalutationCode, on_delete=models.CASCADE, db_column='Salution_code')
    driver_full_name = models.CharField(max_length=255)
    company = models.ForeignKey(UserCompanyDetails, on_delete=models.CASCADE, db_column='Company_id')
    country_code = models.ForeignKey(CountryDetail, on_delete=models.CASCADE, db_column='Country_Code')
    cell_number = models.BigIntegerField()
    whatsapp_number = models.BigIntegerField()
    customer = models.ForeignKey(CustomerDetail, on_delete=models.CASCADE, db_column='Customer_id')
    attribute1 = models.CharField(max_length=255, blank=True, null=True)
    attribute2 = models.CharField(max_length=255, blank=True, null=True)
    attribute3 = models.CharField(max_length=255, blank=True, null=True)
    attribute4 = models.CharField(max_length=255, blank=True, null=True)
    attribute5 = models.CharField(max_length=255, blank=True, null=True)
    attribute6 = models.CharField(max_length=255, blank=True, null=True)
    created_on = models.DateField(auto_now_add=True)
    created_by_user_id = models.IntegerField()
    updated_on = models.DateField(auto_now=True)
    updated_by_user_id = models.IntegerField(blank=True, null=True)
    language_code = models.CharField(max_length=10, blank=True, null=True)
    soft_delete = models.BooleanField(default=False)

    class Meta:
        db_table = 'opiglo_customer_driver_detail'


class NotificationDetail(models.Model):
    notification_id = models.AutoField(primary_key=True)
    start_date = models.DateField()
    notification_name = models.CharField(max_length=255)
    notification_description = models.CharField(max_length=255)
    target_end_date = models.DateField()
    account = models.ForeignKey(CustomerDetail, on_delete=models.CASCADE, db_column='Account_id')
    attribute1 = models.CharField(max_length=255, blank=True, null=True)
    attribute2 = models.CharField(max_length=255, blank=True, null=True)
    attribute3 = models.CharField(max_length=255, blank=True, null=True)
    attribute4 = models.CharField(max_length=255, blank=True, null=True)
    attribute5 = models.CharField(max_length=255, blank=True, null=True)
    attribute6 = models.CharField(max_length=255, blank=True, null=True)
    created_on = models.DateField(auto_now_add=True)
    created_by_user_id = models.IntegerField()
    updated_on = models.DateField(auto_now=True)
    updated_by_user_id = models.IntegerField(blank=True, null=True)
    language_code = models.CharField(max_length=10, blank=True, null=True)
    soft_delete = models.BooleanField(default=False)

    class Meta:
        db_table = 'opiglo_notification_detail'

    
