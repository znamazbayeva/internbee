from rest_framework import serializers
from .models import Internship, InternshipLike

class InternshipSerializer(serializers.ModelSerializer):
    class Meta:
        model = Internship
        fields = '__all__'
        depth = 1

class InternshipLikeSerializer(serializers.ModelSerializer):
    student = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = InternshipLike
        fields = ('id', 'student', 'internship')