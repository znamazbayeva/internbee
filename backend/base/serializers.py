from rest_framework import serializers
from .models import Internship, User
from djoser.serializers import UserCreateSerializer as BaseUserRegistrationSerializer

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'password', 'is_student', 'is_company']

class InternshipSerializer(serializers.ModelSerializer):
    class Meta:
        model = Internship
        fields = '__all__'