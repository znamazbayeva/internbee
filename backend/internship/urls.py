from django.urls import path
from . import views
urlpatterns = [
  path('all/', views.InternshipListView.as_view(), name='all-internships'),
  path('sorted/', views.InternshipListView.as_view(), name="sorted-internships"),
  path('like/<int:pk>/', views.InternshipLikeAPIView.as_view(),  name='internship-like-get'),
  path('like/create/<int:pk>/', views.InternshipLikeCreateAPIView.as_view(),  name='internship-like-create'),
  path('like/delete/<int:pk>/', views.InternshipLikeDestroyAPIView.as_view(),  name='internship-like-delete'),
  path('create/', views.InternshipCreateAPIView.as_view(), name='create-internship')
]