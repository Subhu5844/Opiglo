from .models import Customer
from django.http import JsonResponse
from django.core.exceptions import ValidationError
from django.views.decorators.csrf import csrf_exempt
import json
from django.contrib.auth.hashers import check_password  

@csrf_exempt  
def register_customer(request):
    if request.method == 'POST':
        try:
            # Parse JSON input if request content is JSON
            if request.content_type == 'application/json':
                data = json.loads(request.body)
            else:
                # Fallback for form-encoded input
                data = request.POST

            name = data.get('name')
            position = data.get('position')
            company_name = data.get('company_name')
            email = data.get('email')
            contact_work_no = data.get('contact_work_no')
            registration_no = data.get('registration_no')
            vat_no = data.get('vat_no')
            physical_address = data.get('physical_address')
            payment_method = data.get('payment_method')
            password = data.get('password')
            confirm_password = data.get('confirm_password')

            # Additional fields
            field1 = data.get('field1')
            field2 = data.get('field2')
            field3 = data.get('field3')
            field4 = data.get('field4')
            field5 = data.get('field5')
            field6 = data.get('field6')

            # Validation logic
            if password != confirm_password:
                return JsonResponse({'error': 'Passwords do not match!'}, status=400)

            if not email or not password:
                return JsonResponse({'error': 'Email and password are required!'}, status=400)

            # Save to database
            customer = Customer.objects.create(
                name=name,
                position=position,
                company_name=company_name,
                email=email,
                contact_work_no=contact_work_no,
                registration_no=registration_no,
                vat_no=vat_no,
                physical_address=physical_address,
                payment_method=payment_method,
                password=password,  # Hash passwords before saving in production
                field1=field1,
                field2=field2,
                field3=field3,
                field4=field4,
                field5=field5,
                field6=field6,
            )
            customer.save()

            # Return the data as JSON
            response_data = {
                'success': True,
                'message': 'Customer registered successfully!',
                'data': {
                    'id': customer.id,
                    'name': customer.name,
                    'position': customer.position,
                    'company_name': customer.company_name,
                    'email': customer.email,
                    'contact_work_no': customer.contact_work_no,
                    'registration_no': customer.registration_no,
                    'vat_no': customer.vat_no,
                    'physical_address': customer.physical_address,
                    'payment_method': customer.payment_method,
                    'additional_fields': {
                        'field1': customer.field1,
                        'field2': customer.field2,
                        'field3': customer.field3,
                        'field4': customer.field4,
                        'field5': customer.field5,
                        'field6': customer.field6,
                    }
                }
            }
            return JsonResponse(response_data, status=201)

        except ValidationError as e:
            return JsonResponse({'error': f'Validation error: {e}'}, status=400)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'error': 'Invalid request method'}, status=405)


@csrf_exempt 
def login_customer(request):
    if request.method == 'POST':
        try:
            # Parse JSON input if request content is JSON
            if request.content_type == 'application/json':
                data = json.loads(request.body)
            else:
                # Fallback for form-encoded input
                data = request.POST

            identifier = data.get('identifier')  # This can be email or phone number
            password = data.get('password')

            # Check if the identifier and password are provided
            if not identifier or not password:
                return JsonResponse({'error': 'Identifier (email/phone) and password are required!'}, status=400)

            # Fetch the user by email or phone number
            customer = Customer.objects.filter(email=identifier).first() or \
                       Customer.objects.filter(contact_work_no=identifier).first()

            if not customer:
                return JsonResponse({'error': 'No user found with the provided email or phone number.'}, status=404)

            # # Check if the password matches (use hashed password validation in production)
            # if not check_password(password, customer.password):  # Hashing example (passwords should be hashed during registration)
            #     return JsonResponse({'error': 'Invalid password.'}, status=401)

            # If successful, return user details
            response_data = {
                'success': True,
                'message': 'Login successful!',
                'data': {
                    'id': customer.id,
                    'name': customer.name,
                    'email': customer.email,
                    'contact_work_no': customer.contact_work_no,
                }
            }
            return JsonResponse(response_data, status=200)

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'error': 'Invalid request method'}, status=405)