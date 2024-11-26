from django.db import models

# Create your models here.

class Customer(models.Model):
    name = models.CharField(max_length=100)
    position = models.CharField(max_length=50, choices=[
        ('Manager', 'Manager'),
        ('Developer', 'Developer'),
        ('Designer', 'Designer'),
        ('Other', 'Other'),
    ])
    company_name = models.CharField(max_length=150)
    email = models.EmailField(unique=True)
    contact_work_no = models.CharField(max_length=15)
    registration_no = models.CharField(max_length=20)
    vat_no = models.CharField(max_length=20)
    physical_address = models.TextField()
    payment_method = models.CharField(max_length=50, choices=[
        ('Credit Card', 'Credit Card'),
        ('PayPal', 'PayPal'),
        ('Bank Transfer', 'Bank Transfer'),
    ])
    password = models.CharField(max_length=128)
    # Add 6 additional fields for future use
    field1 = models.CharField(max_length=100, blank=True, null=True)
    field2 = models.CharField(max_length=100, blank=True, null=True)
    field3 = models.CharField(max_length=100, blank=True, null=True)
    field4 = models.CharField(max_length=100, blank=True, null=True)
    field5 = models.CharField(max_length=100, blank=True, null=True)
    field6 = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.name
