# Generated by Django 5.0.6 on 2024-12-06 13:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('opiglo_dev', '0003_rename_full_name_customerdetail_name_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customerdetail',
            name='payment_method',
            field=models.CharField(choices=[('Prepaid(EFT)', 'Prepaid(EFT)')], max_length=50),
        ),
    ]
