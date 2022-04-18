from django.urls import path
from . import views
urlpatterns = [
    path("users/", views.UserListCreateView.as_view(), name="all-users"),
    path('users/<int:pk>/', views.UserDetailView.as_view, name='user-update-delete-get'),

    path('login/', views.CustomAuthToken.as_view(), name='auth-token'),
    path('logout/', views.LogoutView.as_view(), name='logout-view'),

    path("companys/", views.CompanyListCreateView.as_view(), name="all-companys"),
    path('signup/company/', views.CompanySignupView.as_view()),
    path('company/dashboard/', views.CompanyOnlyView.as_view(), name='company-dashboard'),
    path('company/<int:pk>/', views.CompanyDetailView.as_view(), name='get-company-data-from-userid'),
    path('company/<int:pk>/', views.CompanyProfileAPIView.as_view(), name='company-get-or-update'),

    
]