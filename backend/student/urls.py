from django.urls import path
from . import views

urlpatterns = [
  path('signup/', views.StudentSignupView.as_view()),
  path('dashboard/', views.StudentOnlyView.as_view(), name='student-dashboard'),
  path('<int:pk>/', views.StudentDetailView.as_view(), name='get-student-data-from-userid'),
  path('all/', views.StudentListView.as_view(), name='all-students'),
  path('edit/<int:pk>/', views.StudentProfileAPIView.as_view(), name='student-get-or-update'),
]