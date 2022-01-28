from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Internship
from .serializers import InternshipSerializer
# Create your views here.

@api_view(['GET'])
def getInternships(request):
    internships = Internship.objects.all()
    serializer = InternshipSerializer(internships, many=True)
    return Response(serializer.data)