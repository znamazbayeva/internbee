from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Internship, User, Student, InternshipLike
from rest_framework import generics, permissions, status
from .serializers import InternshipSerializer, UserSerializer, CompanySignupSerializer, StudentSignupSerializer, StudentSerializer, InternshipLikeSerializer
from rest_framework.generics import (ListCreateAPIView,RetrieveUpdateDestroyAPIView, GenericAPIView, CreateAPIView) 
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from .permissions import IsOwnerProfileOrReadOnly
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from .permissions import IsStudentUser, IsCompanyUser
from rest_framework.authtoken.views import ObtainAuthToken
from django.core.mail import EmailMessage
import random
from django.shortcuts import get_object_or_404

# Create your views here.

@api_view(['GET'])
def getInternships(request):
    internships = Internship.objects.all()
    serializer = InternshipSerializer(internships, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getStudent(request, pk):
    student = Student.objects.get(user = pk)
    serializer = StudentSerializer(student, many=False)
    return Response(serializer.data)
class InternshipListView(generics.ListCreateAPIView):
    model = Internship
    serializer_class = InternshipSerializer

    def get_queryset(self):
        queryset = Internship.objects.all()
        name = self.request.query_params.get('name')
        location = self.request.query_params.get('location')
        category = self.request.query_params.get('category')
        if name != None:
            queryset = queryset.filter(name__icontains=name)
            print(queryset)
        elif location != None:
            queryset = queryset.filter(location__icontains=location)
            print(queryset)
        elif category != None:
            queryset = queryset.filter(category__icontains=category)
            print(queryset)
        return queryset

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

class InternshipLikeAPIView(generics.CreateAPIView):
    """
    Like, Dislike a recipe
    """
    serializer_class = InternshipLikeSerializer
    permission_classes =[]

    def post(self, request, pk):
        print(request)
        internship = get_object_or_404(Internship, _id=self.kwargs['pk'])
        student = get_object_or_404(Student, user=request.user.id)
        print(internship)
        print(student)
        new_like, created = InternshipLike.objects.get_or_create(
            student=student, internship = internship)
        if created:
            new_like.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        internship = get_object_or_404(Internship, id=self.kwargs['pk'])
        like = InternshipLike.objects.filter(student=request.user, internship=internship)
        if like.exists():
            like.delete()
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)