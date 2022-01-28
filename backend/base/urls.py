from django.urls import path
from . import views
urlpatterns = [
    path('internships/', views.getInternships, name='internships')
]