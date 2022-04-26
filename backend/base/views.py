from rest_framework.response import Response
from .models import User, Company
from rest_framework import generics, permissions, status
from .serializers import UserSerializer, CompanySignupSerializer, CompanySerializer
from rest_framework.generics import (ListCreateAPIView,RetrieveUpdateDestroyAPIView, GenericAPIView, CreateAPIView, RetrieveAPIView) 
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from .permissions import IsOwnerProfileOrReadOnly
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from .permissions import IsCompanyUser
from rest_framework.authtoken.views import ObtainAuthToken
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import csrf_exempt

# Get certain company with user id (pk)
class CompanyDetailView(RetrieveAPIView):
    queryset=Company.objects.all()
    serializer_class=CompanySerializer
    permission_classes=[IsOwnerProfileOrReadOnly | IsAdminUser]
    def get(self, request, *args, **kwargs):
        company = get_object_or_404(Company, user=self.kwargs['pk'])
        serializer = self.get_serializer(company, data=request.data)
        if serializer.is_valid():
            return Response(serializer.data)
        return Response({"message": "serializer is not valid"})
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
    permission_classes=[]

    def delete(self, request, pk):
        user = get_object_or_404(User, id=self.kwargs['pk'])
        if user:
            user.delete()
            return Response({"message": "User is uccessfully deleted"}, status=status.HTTP_200_OK)
        return Response({"message": "Something went wrong"}, status=status.HTTP_400_BAD_REQUEST)

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
            "message":"account created successfully",
            "company": CompanySerializer(Company.objects.get(user=user)).data
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


class CompanyOnlyView(generics.RetrieveAPIView):
    permission_classes=[permissions.IsAuthenticated&IsCompanyUser]
    serializer_class=UserSerializer

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
        cid = self.kwargs["pk"]
        return get_object_or_404(Company, cid=cid)
    
    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)
