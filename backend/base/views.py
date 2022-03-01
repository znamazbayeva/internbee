from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Internship, User
from rest_framework import generics, permissions, status
from .serializers import InternshipSerializer, UserSerializer, CompanySignupSerializer, StudentSignupSerializer
from rest_framework.generics import (ListCreateAPIView,RetrieveUpdateDestroyAPIView, GenericAPIView) 
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from .permissions import IsOwnerProfileOrReadOnly
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from .permissions import IsStudentUser, IsCompanyUser
from rest_framework.authtoken.views import ObtainAuthToken
# Create your views here.

@api_view(['GET'])
def getInternships(request):
    internships = Internship.objects.all()
    serializer = InternshipSerializer(internships, many=True)
    return Response(serializer.data)

class UserListCreateView(ListCreateAPIView):
    queryset= User.objects.all()
    serializer_class=UserSerializer
    permission_classes=[IsAuthenticated, IsAdminUser]

    def perform_create(self, serializer):
        user=self.request.user
        serializer.save(user=user)


class UserDetailView(RetrieveUpdateDestroyAPIView):
    queryset=User.objects.all()
    serializer_class=UserSerializer
    permission_classes=[IsOwnerProfileOrReadOnly | IsAdminUser]


class CompanySignupView(GenericAPIView):
    serializer_class=CompanySignupSerializer
    def post(self, request, *args, **kwargs):
        serializer=self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user=serializer.save()
        return Response({
            "user":UserSerializer(user, context=self.get_serializer_context()).data,
            "token":Token.objects.get(user=user).key,
            "message":"account created successfully"
        })


class StudentSignupView(GenericAPIView):
    serializer_class=StudentSignupSerializer
    def post(self, request, *args, **kwargs):
        serializer=self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user=serializer.save()
        return Response({
            "user":UserSerializer(user, context=self.get_serializer_context()).data,
            "token":Token.objects.get(user=user).key,
            "message":"account created successfully"
        })

class CustomAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer=self.serializer_class(data=request.data, context={'request':request})
        serializer.is_valid(raise_exception=True)
        user=serializer.validated_data['user']
        token, created=Token.objects.get_or_create(user=user)
        return Response({
            'token':token.key,
            'user_id':user.pk,
            'is_student':user.is_student,
            'is_company': user.is_company,
        })


class LogoutView(APIView):
    def post(self, request, format=None):
        request.auth.delete()
        return Response(status=status.HTTP_200_OK)


class StudentOnlyView(generics.RetrieveAPIView):
    permission_classes=[permissions.IsAuthenticated&IsStudentUser]
    serializer_class=UserSerializer

    def get_object(self):
        return self.request.user

class CompanyOnlyView(generics.RetrieveAPIView):
    permission_classes=[permissions.IsAuthenticated&IsCompanyUser]
    serializer_class=UserSerializer

    def get_object(self):
        return self.request.user