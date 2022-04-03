from rest_framework import serializers
from .models import Student
from base.models import User

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'
        depth = 1

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

