from django.urls import path
from . import views
urlpatterns = [
    path('internships/', views.getInternships, name='internships'),
    # path("users/", views.UserListCreateView.as_view(), name="all-users"),
    # path("users/<int:pk>", views.userDetailView.as_view(), name="user"),
]