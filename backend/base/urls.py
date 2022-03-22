from django.urls import path
from . import views
urlpatterns = [
    # path v1/api/internships/ -> 
    path('internships/', views.getInternships, name='internships'),
    # path("users/", views.UserListCreateView.as_view(), name="all-users"),
    # path("users/<int:pk>", views.UserDetailView.as_view(), name="user"),
    path('internship/', views.InternshipListView.as_view(), name="sorted-internships"),
    path('signup/company/', views.CompanySignupView.as_view()),
    path('signup/student/', views.StudentSignupView.as_view()),
    path('login/', views.CustomAuthToken.as_view(), name='auth-token'),
    path('logout/', views.LogoutView.as_view(), name='logout-view'),
    path('company/dashboard/', views.CompanyOnlyView.as_view(), name='company-dashboard'),
    path('student/dashboard/', views.StudentOnlyView.as_view(), name='student-dashboard'),
    path('student/verify/', views.send_email, name='student-verify'),
    path('student/<int:pk>', views.getStudent, name='student-verify'),
]