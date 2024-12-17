



###########################################################################################################################################


from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from .models import BankDetail, CountryDetail, CurrencyDetail,SalutationCode, FuelDepotDetail, RoleDetail, UserCompanyDetails, CustomerDetail,SalutationCode
from rest_framework import status
from .serializers import CountryDetailSerializer,BankDetailSerializer, CurrencyDetailSerializer,SalutationCodeSerializer, FuelDepotDetailSerializer, RoleDetailSerializer, UserCompanyDetailsSerializer, CustomerDetailSerializer,AdminDetailSerializer
from rest_framework.permissions import IsAuthenticated

from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.hashers import check_password
from django.contrib.auth.hashers import make_password

from rest_framework_simplejwt.exceptions import TokenError

#CREATE ADMIN SEPARATELY 


@api_view(['POST'])
def create_admin(request):
    """
    View to create a new admin record.
    """
    if request.method == 'POST':
        data = request.data

        # Validate the salutation_code
        salutation_code_id = data.get('salutation_code')
        try:
            salutation_code = SalutationCode.objects.get(pk=salutation_code_id)
            data['salutation_code'] = salutation_code.pk  # Ensure it references the valid object
        except SalutationCode.DoesNotExist:
            return Response(
                {'error': 'Invalid salutation code ID.'},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Create the admin using the serializer
        serializer = AdminDetailSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def country_detail(request, country_id=None):
    if request.method == 'GET':
        # Get a single country by ID or all countries if no ID is passed
        if country_id:
            try:
                country = CountryDetail.objects.get(country_id=country_id)
                serializer = CountryDetailSerializer(country)
                return Response(serializer.data)
            except CountryDetail.DoesNotExist:
                return Response({'error': 'Country not found'}, status=status.HTTP_404_NOT_FOUND)
        else:
            countries = CountryDetail.objects.all()
            serializer = CountryDetailSerializer(countries, many=True)
            return Response(serializer.data)

    elif request.method == 'POST':
        # Create a new country detail entry
        serializer = CountryDetailSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'PUT':
        # Update an existing country detail entry
        try:
            country = CountryDetail.objects.get(country_id=country_id)
        except CountryDetail.DoesNotExist:
            return Response({'error': 'Country not found'}, status=status.HTTP_404_NOT_FOUND)

        serializer = CountryDetailSerializer(country, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        # Delete a country detail entry
        try:
            country = CountryDetail.objects.get(country_id=country_id)
            country.delete()
            return Response({'message': 'Country deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
        except CountryDetail.DoesNotExist:
            return Response({'error': 'Country not found'}, status=status.HTTP_404_NOT_FOUND)


# After Admin creartion we will use this API
# @api_view(['GET', 'POST'])
# @permission_classes([IsAuthenticated])
# def bank_list_create(request):
#     if request.method == 'GET':
#         banks = BankDetail.objects.filter(soft_delete=False)
#         serializer = BankDetailSerializer(banks, many=True)
#         return Response(serializer.data)
0
#     if request.method == 'POST':
#         user_id = request.user.id  # Get logged-in user's ID
#         print('this is user_id in bank', user_id)
#         data = request.data
#         print('req data',data)
#         data['created_by_user_id'] = user_id
#         serializer = BankDetailSerializer(data=data)#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['GET', 'PUT', 'DELETE'])
# @permission_classes([IsAuthenticated])
# def bank_detail_update_delete(request, bank_id):
#     try:
#         bank = BankDetail.objects.get(pk=bank_id, soft_delete=False)
#     except BankDetail.DoesNotExist:
#         return Response({'error': 'Bank not found or deleted.'}, status=status.HTTP_404_NOT_FOUND)

#     if request.method == 'GET':
#         serializer = BankDetailSerializer(bank)
#         return Response(serializer.data)

#     if request.method == 'PUT':
#         data = request.data
#         data['updated_by_user_id'] = request.user.id  # Set the updating user's ID
#         serializer = BankDetailSerializer(bank, data=data, partial=True)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     if request.method == 'DELETE':
#         bank.soft_delete = True  # Mark as soft-deleted
#         bank.save()
#         return Response({'message': 'Bank soft deleted successfully.'}, status=status.HTTP_200_OK)


@api_view(['GET', 'POST'])
def bank_list_create(request):
    if request.method == 'GET':
        banks = BankDetail.objects.filter(soft_delete=False)
        serializer = BankDetailSerializer(banks, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        # Accept `created_by_user_id` from the request data
        data = request.data
        print(data)
        serializer = BankDetailSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def bank_detail_update_delete(request, bank_id):
    try:
        bank = BankDetail.objects.get(pk=bank_id, soft_delete=False)
    except BankDetail.DoesNotExist:
        return Response({'error': 'Bank not found or deleted.'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = BankDetailSerializer(bank)
        return Response(serializer.data)

    if request.method == 'PUT':
        data = request.data
        serializer = BankDetailSerializer(bank, data=data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'DELETE':
        bank.soft_delete = True  # Mark as soft-deleted
        bank.save()
        return Response({'message': 'Bank soft deleted successfully.'}, status=status.HTTP_200_OK)
    




@api_view(['GET', 'POST'])
def currency_list_create(request):
    if request.method == 'GET':
        # Fetch only non-soft-deleted records
        currencies = CurrencyDetail.objects.filter(soft_delete=False)
        serializer = CurrencyDetailSerializer(currencies, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        # Accept `created_by_user_id` from request data
        data = request.data
        serializer = CurrencyDetailSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def currency_detail_update_delete(request, currency_id):
    try:
        currency = CurrencyDetail.objects.get(pk=currency_id, soft_delete=False)
    except CurrencyDetail.DoesNotExist:
        return Response({'error': 'Currency not found or deleted.'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = CurrencyDetailSerializer(currency)
        return Response(serializer.data)

    if request.method == 'PUT':
        data = request.data
        serializer = CurrencyDetailSerializer(currency, data=data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'DELETE':
        currency.soft_delete = True  # Mark the record as soft-deleted
        currency.save()
        return Response({'message': 'Currency soft deleted successfully.'}, status=status.HTTP_200_OK)
    



@api_view(['GET', 'POST'])
def salutation_list_create(request):
    if request.method == 'GET':
        # Fetch non-soft-deleted salutations
        salutations = SalutationCode.objects.filter(soft_delete=False)
        serializer = SalutationCodeSerializer(salutations, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        data = request.data
        serializer = SalutationCodeSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def salutation_detail_update_delete(request, salutation_code_id):
    try:
        salutation = SalutationCode.objects.get(pk=salutation_code_id, soft_delete=False)
    except SalutationCode.DoesNotExist:
        return Response({'error': 'Salutation not found or deleted.'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = SalutationCodeSerializer(salutation)
        return Response(serializer.data)

    if request.method == 'PUT':
        data = request.data
        serializer = SalutationCodeSerializer(salutation, data=data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'DELETE':
        salutation.soft_delete = True  # Mark as soft-deleted
        salutation.save()
        return Response({'message': 'Salutation soft deleted successfully.'}, status=status.HTTP_200_OK)
    



@api_view(['GET', 'POST'])
def fuel_depot_list_create(request):
    if request.method == 'GET':
        depots = FuelDepotDetail.objects.filter(soft_delete=False)
        serializer = FuelDepotDetailSerializer(depots, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        data = request.data
        serializer = FuelDepotDetailSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def fuel_depot_detail_update_delete(request, fuel_depo_id):
    try:
        depot = FuelDepotDetail.objects.get(pk=fuel_depo_id, soft_delete=False)
    except FuelDepotDetail.DoesNotExist:
        return Response({'error': 'Fuel depot not found or deleted.'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = FuelDepotDetailSerializer(depot)
        return Response(serializer.data)

    if request.method == 'PUT':
        data = request.data
        serializer = FuelDepotDetailSerializer(depot, data=data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'DELETE':
        depot.soft_delete = True  # Mark as soft-deleted
        depot.save()
        return Response({'message': 'Fuel depot soft deleted successfully.'}, status=status.HTTP_200_OK)
    



@api_view(['GET', 'POST'])
# @permission_classes([IsAuthenticated])
def role_list_create(request):
    if request.method == 'GET':
        roles = RoleDetail.objects.filter(soft_delete=False)
        serializer = RoleDetailSerializer(roles, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        user_id = 1    # created_by_user_id to 1 for now  we will make it dynamic leter on after creation of user
        data = request.data
        data['created_by_user_id'] = user_id
        serializer = RoleDetailSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
# @permission_classes([IsAuthenticated])
def role_detail_update_delete(request, role_id):
    try:
        role = RoleDetail.objects.get(pk=role_id, soft_delete=False)
    except RoleDetail.DoesNotExist:
        return Response({'error': 'Role not found or deleted.'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = RoleDetailSerializer(role)
        return Response(serializer.data)

    if request.method == 'PUT':
        data = request.data
        data['updated_by_user_id'] = 1  # Set the updating user's ID (set to 1 for now)
        serializer = RoleDetailSerializer(role, data=data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'DELETE':
        role.soft_delete = True  # Mark as soft-deleted
        role.save()
        return Response({'message': 'Role soft deleted successfully.'}, status=status.HTTP_200_OK)
    


# views.py


@api_view(['GET', 'POST'])
# @permission_classes([IsAuthenticated])
def company_list_create(request):
    if request.method == 'GET':
        companies = UserCompanyDetails.objects.filter(soft_delete=False)
        serializer = UserCompanyDetailsSerializer(companies, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        user_id = 1  # For now, assuming created_by_user_id is 1 as requested
        data = request.data
        data['created_by_user_id'] = user_id
        serializer = UserCompanyDetailsSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
# @permission_classes([IsAuthenticated])
def company_detail_update_delete(request, company_id):
    try:
        company = UserCompanyDetails.objects.get(pk=company_id, soft_delete=False)
    except UserCompanyDetails.DoesNotExist:
        return Response({'error': 'Company not found or deleted.'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = UserCompanyDetailsSerializer(company)
        return Response(serializer.data)

    if request.method == 'PUT':
        data = request.data
        data['updated_by_user_id'] = 1  # Set the updating user's ID
        serializer = UserCompanyDetailsSerializer(company, data=data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'DELETE':
        company.soft_delete = True  # Mark as soft-deleted
        company.save()
        return Response({'message': 'Company soft deleted successfully.'}, status=status.HTTP_200_OK)
    



# Create Customers / Users

# 

# @api_view(['POST'])
# # @permission_classes([IsAuthenticated])  # Optionally add authentication
# def create_customer(request):
#     if request.method == 'POST':
#         # The data should include the necessary fields for customer creation
#         data = request.data
#         print('this is request', request)
#         print('this is request.user: ', request.user)
#         print('this is user id from create_customer', request.user.id)
#         company = data.get('company')
#         print("Company field received:", company) 
#         # Check if the company field is a valid object and extract company_id

#         data['created_by_user_id'] = request.user.id


#         if isinstance(company, int):  # If company is an integer (company_id)
#             data['company'] = company  # Use the company_id as-is
#         else:
#             return Response({'error': 'Invalid company format. Expected an integer company_id.'}, status=status.HTTP_400_BAD_REQUEST)
        
#         serializer = CustomerDetailSerializer(data=data)
        
#         if serializer.is_valid():
#             serializer.save()  # Save the customer details to the database
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
        
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)





#API FOR REGISTRATION 




# @api_view(['POST'])
# def register_customer(request):
#     if request.method == 'POST':
#         # Serialize the request data using the CustomerDetailSerializer
#         serializer = CustomerDetailSerializer(data=request.data)
        
#         # Check if the data is valid
#         if serializer.is_valid():
#             # Save the new customer object to the database
#             serializer.save()
            
#             # Return the newly created customer data with HTTP 201 status
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
        
#         # If the data is not valid, return the error details
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['POST'])
def register_customer(request):
    """
    Register a new user with hashed password.
    """
    data = request.data
    serializer = CustomerDetailSerializer(data=data)

    if serializer.is_valid():
        # Hash the password before saving the user
        hashed_password = make_password(data.get('password'))
        serializer.save(password=hashed_password)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




#API FOR LOGIN




@api_view(['POST'])
def login_user(request):
    """
    Authenticate the user with email/whatsapp number and password, and return JWT token.
    """
    email_or_mobile = request.data.get('email_or_mobile')
    password = request.data.get('password')
    
    # Check if email/mobile and password are provided
    if not email_or_mobile or not password:
        return Response({"detail": "Email/Phone and password are required"}, status=status.HTTP_400_BAD_REQUEST)
    
    # Find user by email or whatsapp number
    try:
        user = CustomerDetail.objects.get(email=email_or_mobile)
        print('this is user', user)
    except CustomerDetail.DoesNotExist:
        try:
            user = CustomerDetail.objects.get(contact_work_number=email_or_mobile)
            print('this is user', user)
        except CustomerDetail.DoesNotExist:
            return Response({"detail": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)
    print("this is break line")
    
    # Check if password matches using Django's check_password utility
    if not check_password(password, user.password):
        print('this is password',password)
        print('this is password',user.password)
        return Response({"detail": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)
    
    # Generate JWT tokens
    # refresh = RefreshToken.for_user(user)

    # Generate JWT tokens using customer_id as the unique identifier
    refresh = RefreshToken()
    refresh['user_id'] = user.customer_id  # Use customer_id as the identifier
    access_token = refresh.access_token
    
    # Return the tokens
    return Response({
        'message': 'LLogin successful',
        'refresh': str(refresh),
        'access': str(access_token),
       
    }, status=status.HTTP_200_OK)





#LOGOUT



@api_view(['POST'])
def logout_user(request):
    """
    Logout the user by blacklisting their refresh token sent in the headers.
    """
    print('inside logout')
    # Get the token directly from the Authorization header
    refresh_token = request.headers.get('Authorization')  # Token sent directly without "Bearer" prefix
    if not refresh_token:
        return Response({"detail": "Authorization header with refresh token is required for logout."}, status=status.HTTP_400_BAD_REQUEST)

    try:
        token = RefreshToken(refresh_token)
        token.blacklist()  # Blacklist the token
        print('logout success')
        return Response({"message": "Logout successful!"}, status=status.HTTP_200_OK)
    except TokenError:
        return Response({"detail": "Invalid or expired refresh token."}, status=status.HTTP_400_BAD_REQUEST)
