from django.db import models


# Create your models here.
class Company(models.Model):
    username = models.CharField(max_length=200, null=True, blank=True)
    userEmail =models.CharField(max_length=200, null=True, blank=True)
    password = models.CharField(max_length=200, null=True, blank=True)
    role = models.IntegerField(default=0)
    company_name = models.CharField(max_length=200, null=True, blank=True)
    description = models.CharField(max_length=200, null=True, blank=True)
    cityName = models.CharField(max_length=200, null=True, blank=True)
    address = models.CharField(max_length=200, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.company_name


class Student(models.Model):
    username = models.CharField(max_length=200, null=True, blank=True)
    userEmail =models.CharField(max_length=200, null=True, blank=True)
    password = models.CharField(max_length=200, null=True, blank=True)
    role = models.IntegerField(default=2)
    firstName = models.CharField(max_length=200, null=True, blank=True)
    lastName = models.CharField(max_length=200, null=True, blank=True)
    universityName = models.CharField(default="",max_length=100)
    major = models.CharField(default="",max_length=100)
    gender = models.CharField(max_length=200, null=True, blank=True)
    cGpa = models.DecimalField(max_digits=3, decimal_places=2)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.firstName + self.lastName)

class Internship(models.Model):
    #if company is deleted the internships are deleted too
    company = models.ForeignKey(Company, on_delete=models.CASCADE, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    description = models.CharField(max_length=200, null=True, blank=True)
    requirements = models.CharField(max_length=200, null=True, blank=True)
    duration = models.CharField(max_length=200, null=True, blank=True)
    skills = models.CharField(max_length=200, null=True, blank=True)
    responsibilities = models.CharField(max_length=200, null=True, blank=True)
    salary = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.name)

