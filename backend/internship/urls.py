from django.urls import path
from . import views
urlpatterns = [
  path('all/', views.InternshipListView.as_view(), name='all-internships'),
  path('sorted/', views.InternshipListView.as_view(), name="sorted-internships"),
  path('like/<int:pk>/', views.InternshipLikeAPIView.as_view(),  name='internship-like'),
]