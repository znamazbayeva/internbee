from rest_framework.response import Response
from .models import Application
from .serializers import ApplicationSerializer
from base.models import *
from student.models import Student
from internship.models import Internship
from rest_framework import generics, status
from django.shortcuts import get_object_or_404

class ApplicationListView(generics.ListCreateAPIView):
  model = Application
  serializer_class = ApplicationSerializer

class ApplicationDestroyAPIView(generics.DestroyAPIView):
    """
    Students can  delete their applications
    """
  
    serializer_class = ApplicationSerializer
    permission_classes =[]

    def delete(self, request):
      internship = get_object_or_404(Internship, _id=self.request.data['internship'])
      student = get_object_or_404(Student, user=request.user.id)
      application = Application.objects.filter(student=student, internship=internship)
      if application.exists():
        application.delete()
        return Response({"message": "You succesfully deleted this application"}, status=status.HTTP_200_OK)
      return Response({"message": "You have already deleted this application"}, status=status.HTTP_400_BAD_REQUEST)

class ApplicationCreateAPIView(generics.CreateAPIView):
    """
    Students can apply their applications
    """
  
    serializer_class = ApplicationSerializer
    permission_classes =[]

    def post(self, request):
        internship = get_object_or_404(Internship, _id=self.request.data['internship'])
        student = get_object_or_404(Student, user=request.user.id)
        application = Application.objects.filter(student=student, internship=internship)
        if application.exists():
          return Response({"message": "You have already applied to this internship"}, status=status.HTTP_302_FOUND)
        else:
          new_application, created = Application.objects.get_or_create(student=student, internship = internship, status='A')
  
          if created:
            new_application.save()
            print(new_application)
            return Response({"message": "You have successfully applied to internship"}, status=status.HTTP_201_CREATED)
          return Response(status=status.HTTP_400_BAD_REQUEST)

      
#Change status of application by companies
class ApplicationUpdateGetAPIView(generics.RetrieveUpdateAPIView):
  queryset = Application.objects.all()
  serializer_class = ApplicationSerializer
  permission_classes = []
  def get_object(self):
    id = self.kwargs["pk"]
    return get_object_or_404(Application, id=id)
    
  def put(self, request, *args, **kwargs):
    return self.update(request, *args, **kwargs)

class ApplicationGetStudentAPIView(generics.RetrieveAPIView):
  queryset = Application.objects.all()
  serializer_class = ApplicationSerializer
  permission_classes = []
  def get(self, request):
    student =get_object_or_404(Student, user=request.user.id)
    applications = Application.objects.filter(student=student)
    if applications:
      return Response(ApplicationSerializer(applications, many=True).data)
    else:
      return Response({"message": "You have no applications"})


class ApplicationGetCompanyAPIView(generics.RetrieveAPIView):
  queryset = Application.objects.all()
  serializer_class = ApplicationSerializer
  permission_classes = []
  def get(self, request):
    company =get_object_or_404(Company, user=request.user.id)
    internship = Internship.objects.filter(company=company)
    applications = Application.objects.filter(internship__in=internship)
    if applications:
      return Response(ApplicationSerializer(applications, many=True).data)
    else:
      return Response({"message": "You have no applications"})


