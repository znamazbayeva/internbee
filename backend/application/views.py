from rest_framework.response import Response
from .models import Application
from .serializers import *
from base.models import *
from internship.models import *
from rest_framework import generics, status
from django.shortcuts import get_object_or_404

class ApplicationListView(generics.ListCreateAPIView):
  model = Application
  serializer_class = ApplicationSerializer

class ApplicationAPIView(generics.CreateAPIView):
    """
    Students can apply or delete their applications
    """
    serializer_class = ApplicationSerializer
    permission_classes =[]

    def post(self, request):
        internship = get_object_or_404(Internship, _id=self.request.data['internship'])
        student = get_object_or_404(Student, user=request.user.id)
        print(internship, student)
        application = Application.objects.filter(student=student, internship=internship)
        if application.exists():
          return Response({"message": "You have already applied to this internship"}, status=status.HTTP_302_FOUND)
        else:
          new_application, created = Application.objects.get_or_create(student=student, internship = internship, status='A')
          if created:
            new_application.save()
            return Response({"message": "You have successfully applied to internship"}, status=status.HTTP_201_CREATED)
          return Response(status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request):
        internship = get_object_or_404(Internship, _id=self.request.data['internsip'])
        application = Application.objects.filter(student=request.user, internship=internship)
        if application.exists():
            application.delete()
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
      
#Change status of application by companies
class ApplicationUpdateAPIView(generics.UpdateAPIView):
  serializer_class = ApplicationSerializer
  permission_classes = []
  def put(self, request):
    internship = get_object_or_404(Internship, _id=self.request.data['internship'])
    student = get_object_or_404(Student, sid=self.request.data['student'])
    application = Application.objects.filter(student=student, internship=internship)
    print(internship, student, application)
    if application.exists():
      serializer = self.get_serializer(application.first(), data = request.data, partial = True)
      print(serializer)
      if serializer.is_valid():
        serializer.save()
        return Response({"message": "status of internship updated successfully", "details": serializer.data})
      else:
        return Response({'message': "failed", "details": serializer.errors})
    return Response({"message", "Such application does not exists"})

#Students can rate the internship at the end 