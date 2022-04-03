from rest_framework.response import Response
from .models import Internship, InternshipLike
from .serializers import InternshipSerializer, InternshipLikeSerializer
from rest_framework import generics, status
from django.shortcuts import get_object_or_404
from rest_framework.permissions import AllowAny, IsAuthenticated
from base.models import Student

class InternshipListView(generics.ListCreateAPIView):
    model = Internship
    serializer_class = InternshipSerializer

    def get_queryset(self):
        queryset = Internship.objects.all()
        name = self.request.query_params.get('name')
        location = self.request.query_params.get('location')
        category = self.request.query_params.get('category')
        if name != None:
            queryset = queryset.filter(name__icontains=name)
            print(queryset)
        elif location != None:
            queryset = queryset.filter(location__icontains=location)
            print(queryset)
        elif category != None:
            queryset = queryset.filter(category__icontains=category)
            print(queryset)
        return queryset

class InternshipLikeAPIView(generics.CreateAPIView):
    """
    Like, Dislike a recipe
    """
    serializer_class = InternshipLikeSerializer
    permission_classes =[]

    def post(self, request, pk):
        internship = get_object_or_404(Internship, _id=self.kwargs['pk'])
        student = get_object_or_404(Student, user=request.user.id)
        new_like, created = InternshipLike.objects.get_or_create(
            student=student, internship = internship)
        if created:
            new_like.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        internship = get_object_or_404(Internship, id=self.kwargs['pk'])
        like = InternshipLike.objects.filter(student=request.user, internship=internship)
        if like.exists():
            like.delete()
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)