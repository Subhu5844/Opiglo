from rest_framework import serializers
from .models import CountryDetail, BankDetail, CurrencyDetail,SalutationCode, FuelDepotDetail, RoleDetail, UserCompanyDetails, CustomerDetail,AdminDetail

class UserCompanyDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserCompanyDetails
        fields = '__all__'


class CountryDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = CountryDetail
        fields = '__all__'


class BankDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = BankDetail
        fields = '__all__'

class CurrencyDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = CurrencyDetail
        fields = '__all__'

class SalutationCodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = SalutationCode
        fields = '__all__'

class FuelDepotDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = FuelDepotDetail
        fields = '__all__'



class RoleDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = RoleDetail
        fields = '__all__'


class UserCompanyDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserCompanyDetails
        fields = '__all__'
        

class AdminDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdminDetail
        fields = '__all__'

class CustomerDetailSerializer(serializers.ModelSerializer):

    # country_code = serializers.SlugRelatedField(
    #     queryset=CountryDetail.objects.all(),
    #     slug_field='country_code'
    # )
    class Meta:
        model = CustomerDetail
        fields = '__all__'


    # def validate_company(self, value):
    #     # Ensure the provided company ID exists in the UserCompanyDetails table
    #     try:
    #         print("Company IDis  :", value.company_id)            
    #         company = UserCompanyDetails.objects.get(company_id=value.company_id)  # Use value directly as company_id
    #         print('this is company obj in validate_company', company)
    #         return company
    #     except UserCompanyDetails.DoesNotExist:
    #         raise serializers.ValidationError("Invalid Company ID.")
    
    # def validate_role(self, value):
    #     # Ensure the provided role ID exists in the RoleDetail table
    #     try:
    #         role = RoleDetail.objects.get(role_id=value.role_id)
    #         return role
    #     except RoleDetail.DoesNotExist:
    #         raise serializers.ValidationError("Invalid Role ID.")
    
    # def validate_country_code(self, value):
    # # Ensure the provided country_code exists in the CountryDetail table
    #         try:
    #             country = CountryDetail.objects.get(country_code=value.country_code)  # Match using country_code
    #             print('validate_country', country)
    #             return country  # Return the instance for further use
    #         except CountryDetail.DoesNotExist:
    #             raise serializers.ValidationError("Invalid Country Code.")
   
