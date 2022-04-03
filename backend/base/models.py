from email.errors import NonPrintableDefect
from tkinter import CASCADE
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save
from django.dispatch import receiver
from .managers  import UserManager
from django.conf import settings
from rest_framework.authtoken.models import Token

class User(AbstractUser):
    username = None
    email = models.EmailField(unique=True, max_length=255)
    USERNAME_FIELD = 'email'
    
    is_student = models.BooleanField()
    is_company = models.BooleanField()
    REQUIRED_FIELDS = ['is_student', 'is_company']
    objects = UserManager()

    def __str__(self):
        return self.email

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)


class Company(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    cid = models.AutoField(unique=True, primary_key=True)
    company_name = models.CharField(max_length=200, null=True, blank=True)
    description = models.CharField(max_length=200, null=True, blank=True)
    cityName = models.CharField(max_length=200, null=True, blank=True)
    address = models.CharField(max_length=200, null=True, blank=True)
    img = models.CharField(max_length=1000, null=True, blank=True)
    def __str__(self):
        return self.user.email


class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    sid = models.AutoField(unique=True, primary_key=True)
    firstName = models.CharField(max_length=200, null=True, blank=True)
    lastName = models.CharField(max_length=200, null=True, blank=True)
    universityName = models.CharField(default="",max_length=100, null=True, blank=True)
    major = models.CharField(default="",max_length=100, null=True, blank=True)
    gender = models.CharField(max_length=200, null=True, blank=True)
    cGpa = models.DecimalField(max_digits=3, decimal_places=2, null=True, blank=True)
    img = models.CharField(max_length=1000, null=True, blank=True)
    def __str__(self):
        return self.user.email


# @receiver(post_save, sender=User)
# def create_user_profile(sender, instance, created, **kwargs):
#     if created:
#         if instance.is_student:
#             Student.objects.create(user=instance)
#         elif instance.is_company:
#             Company.objects.create(user=instance)

# @receiver(post_save, sender=User)
# def save_user_profile(sender, instance, **kwargs):
#     if instance.is_student:
#         instance.student.save()
#     elif instance.is_company:
#         instance.company.save()


# class Skills(models.Model):
#     name = models.CharField(max_length=200, null=True, blank=True)

