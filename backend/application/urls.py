from django.urls import path
from . import views

urlpatterns = [
  path('apply/', views.ApplicationCreateAPIView.as_view(), name='apply-internship'),
  path('delete/', views.ApplicationDestroyAPIView.as_view(), name='delete-internship'),
  path('edit/<int:pk>/', views.ApplicationUpdateGetAPIView.as_view(), name='update-status-of-application-get'),
  path('student/all/', views.ApplicationGetStudentAPIView.as_view(), name='get-students-all-applications'),
  path('company/all/', views.ApplicationGetCompanyAPIView.as_view(), name='get-companies-all-applications')
]