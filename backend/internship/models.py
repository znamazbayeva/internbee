from django.db import models
from base.models import *
from student.models import *

class Internship(models.Model):
    #if company is deleted the internships are deleted too
    _id = models.AutoField(primary_key=True, editable=False)
    company = models.ForeignKey(Company, on_delete=models.CASCADE, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    location = models.CharField(max_length=200, null=True, blank=True)
    category = models.CharField(max_length=200, null=True, blank=True)
    description = models.CharField(max_length=200, null=True, blank=True)
    requirements = models.CharField(max_length=200, null=True, blank=True)
    duration = models.CharField(max_length=200, null=True, blank=True)
    skills = models.CharField(max_length=200, null=True, blank=True)
    responsibilities = models.CharField(max_length=200, null=True, blank=True)
    salary = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    video = models.CharField(max_length=200, null=True, blank=True)
    def __str__(self):
        return str(self.name)

    def get_total_number_of_likes(self):
        return self.internshiplike_set.count()


class InternshipLike(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    internship = models.ForeignKey(Internship, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.student.user.email

