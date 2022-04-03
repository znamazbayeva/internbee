from rest_framework import serializers
from .models import User, Student, Company

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'password', 'is_student', 'is_company']

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'
        depth = 1
class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'
        depth = 1
class CompanySignupSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['email','password']
        extra_kwargs={
            'password':{'write_only':True}
        }
    
    def save(self, **kwargs):
        user=User(
            email=self.validated_data['email']
        )
        password=self.validated_data['password']
        user.set_password(password)
        user.is_student=False
        user.is_company=True
        user.save()
        Company.objects.create(user=user)
        return user

class StudentSignupSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['email','password']
        extra_kwargs={
            'password':{'write_only':True}
        }
    

    def save(self, **kwargs):
        user=User(
            email=self.validated_data['email']
        )
        password=self.validated_data['password']
        user.set_password(password)
        user.is_student=True
        user.is_company=False
        user.save()
        Student.objects.create(user=user)
        return user

