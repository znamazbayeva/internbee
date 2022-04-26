from rest_framework.response import Response
from .models import Student
from rest_framework import generics, permissions, status
from .serializers import StudentSignupSerializer, StudentSerializer
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from base.permissions import IsOwnerProfileOrReadOnly
from .permissions import IsStudentUser
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from rest_framework.authtoken.views import ObtainAuthToken
from django.shortcuts import get_object_or_404
from base.serializers import UserSerializer
# Create your views here.


# Get list of students
class StudentListView(generics.ListAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

# Get certain student with user id (pk)
class StudentDetailView(generics.RetrieveAPIView):
    queryset=Student.objects.all()
    serializer_class=StudentSerializer
    permission_classes=[IsOwnerProfileOrReadOnly | IsAdminUser]
    def get(self, request, *args, **kwargs):
        student = get_object_or_404(Student, user=self.kwargs['pk'])
        serializer = self.get_serializer(student, data=request.data)
        if serializer.is_valid():
            return Response(serializer.data)
        return Response({"message": "serializer is not valid"})

# Signup of student user
class StudentSignupView(generics.GenericAPIView):
    serializer_class=StudentSignupSerializer
    def post(self, request, *args, **kwargs):
        serializer=self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user=serializer.save()
        return Response({
            "user":UserSerializer(user, context=self.get_serializer_context()).data,
            "token":Token.objects.get(user=user).key,
            "message":"account created successfully",
            "student": StudentSerializer(Student.objects.get(user=user)).data
        })

class StudentOnlyView(generics.RetrieveAPIView):
    permission_classes=[permissions.IsAuthenticated&IsStudentUser]
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
        sid = self.kwargs["pk"]
        return get_object_or_404(Student, sid=sid)
    
    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)
