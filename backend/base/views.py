from urllib import response
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import User, Student, Company
from rest_framework import generics, permissions, status
from .serializers import UserSerializer, CompanySignupSerializer, StudentSignupSerializer, StudentSerializer, CompanySerializer
from rest_framework.generics import (ListCreateAPIView,RetrieveUpdateDestroyAPIView, GenericAPIView, CreateAPIView, RetrieveAPIView) 
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from .permissions import IsOwnerProfileOrReadOnly
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from .permissions import IsStudentUser, IsCompanyUser
from rest_framework.authtoken.views import ObtainAuthToken
from django.shortcuts import get_object_or_404

# Get list of students
class StudentListView(generics.ListAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

# Get certain student with id (pk)
class StudentDetailView(RetrieveAPIView):
    queryset=Student.objects.all()
    serializer_class=StudentSerializer
    permission_classes=[IsOwnerProfileOrReadOnly | IsAdminUser]

#Get list of users    
class UserListCreateView(ListCreateAPIView):
    queryset= User.objects.all()
    serializer_class=UserSerializer
    permission_classes=[IsAuthenticated, IsAdminUser]

    def perform_create(self, serializer):
        user=self.request.user
        serializer.save(user=user)

# Edit, get or delete the user
class UserDetailView(RetrieveUpdateDestroyAPIView):
    queryset=User.objects.all()
    serializer_class=UserSerializer
    permission_classes=[IsOwnerProfileOrReadOnly | IsAdminUser]

# Signup of the company
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

# Signup of student user
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

# Authentication
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

class StudentProfileAPIView(generics.RetrieveUpdateAPIView):
    """
    Get (Get), Update (Put) student profile
    """
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    permission_classes = (IsAuthenticated,)

    def get_object(self):
        return self.request.user

class CompanyProfileAPIView(generics.RetrieveUpdateAPIView):
    """
    Get, Update Company profile
    """
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    permission_classes = (IsAuthenticated,)

    def get_object(self):
        return self.request.user