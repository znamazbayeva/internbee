from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Internship, User
from .serializers import InternshipSerializer, UserSerializer

from rest_framework.generics import (ListCreateAPIView,RetrieveUpdateDestroyAPIView,)
from rest_framework.permissions import IsAuthenticated
from .permissions import IsOwnerProfileOrReadOnly
# Create your views here.

@api_view(['GET'])
def getInternships(request):
    internships = Internship.objects.all()
    serializer = InternshipSerializer(internships, many=True)
    return Response(serializer.data)

class UserListCreateView(ListCreateAPIView):
    queryset= User.objects.all()
    serializer_class=UserSerializer
    permission_classes=[IsAuthenticated]

    def perform_create(self, serializer):
        user=self.request.user
        serializer.save(user=user)


class userDetailView(RetrieveUpdateDestroyAPIView):
    queryset=User.objects.all()
    serializer_class=UserSerializer
    permission_classes=[IsOwnerProfileOrReadOnly,IsAuthenticated]