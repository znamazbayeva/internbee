from django.db import models
from base.models import Student
from internship.models import Internship
# Create your models here.

class Application(models.Model):
  STATUS = (
    ('A', 'Applied'),
    ('R', 'Received'),
    ('I', 'Interviewing'),
    ('R', 'Rejected'),
    ('C', 'Completed'),
  )
  internship = models.ForeignKey(Internship, on_delete=models.CASCADE)
  student = models.ForeignKey(Student, on_delete=models.CASCADE)
  applied_at = models.DateTimeField(auto_now_add=True, null=True)
  updated_at = models.DateTimeField(auto_now=True, null=True)
  status = models.CharField(max_length=100, choices=STATUS)

  def __str__(self):
    return self.internship.name