from django.db import models
from base.models import *
# Create your models here.


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