from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Internship

class InternshipSerializer(serializers.ModelSerializer):
    class Meta:
        model = Internship
        fields = '__all__'