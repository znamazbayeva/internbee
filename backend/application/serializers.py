from dataclasses import field
from rest_framework import serializers
from .models import *

class ApplicationSerializer(serializers.ModelSerializer):
  class Meta:
    model = Application
    fields = '__all__'
    depth = 1