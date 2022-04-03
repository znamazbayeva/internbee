from django.urls import path
from . import views

urlpatterns = [
  path('apply/', views.ApplicationAPIView.as_view(), name='apply-internship'),
  path('delete/', views.ApplicationAPIView.as_view(), name='delete-internship'),
  path('edit/', views.ApplicationUpdateAPIView.as_view(), name='update-status-of-application'),
]