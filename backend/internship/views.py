from rest_framework.response import Response
from base.models import Company
from .models import Internship, InternshipLike
from .serializers import InternshipSerializer, InternshipLikeSerializer
from rest_framework import generics, status
from django.shortcuts import get_object_or_404
from rest_framework.permissions import AllowAny, IsAuthenticated
from student.models import Student

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
class InternshipLikeAPIView(generics.RetrieveAPIView):
    """
    Get internship like
    """
    serializer_class = InternshipLikeSerializer
    permission_classes =[]  
    def get(self, request, *args, **kwargs):
        internship_like = get_object_or_404(InternshipLike, id=kwargs['pk'])
        if internship_like:
            return Response(InternshipLikeSerializer(internship_like).data)
        return Response({"message": "such internship like do not exists"})
class InternshipLikeCreateAPIView(generics.CreateAPIView):
    """
    Like internship
    """
    serializer_class = InternshipLikeSerializer
    permission_classes =[]

    def post(self, request, *args, **kwargs):
        internship = get_object_or_404(Internship, _id=kwargs['pk'])
        student = get_object_or_404(Student, user=request.user.id)
        new_like, created = InternshipLike.objects.get_or_create(student=student, internship = internship)
        if new_like:
            new_like.save()
            return Response( {"message": "You have successfully created internship", "internship_like": InternshipLikeSerializer(new_like).data}, status=status.HTTP_201_CREATED)
        return Response({"message": "Something wrong"}, status=status.HTTP_400_BAD_REQUEST)
    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)
class InternshipLikeDestroyAPIView(generics.DestroyAPIView):
    def delete(self, request, pk):
        internship = get_object_or_404(Internship, _id=self.kwargs['pk'])
        student = get_object_or_404(Student, user=request.user.id)
        like = InternshipLike.objects.filter(student=student, internship=internship)
        if like.exists():
            like.delete()
            return Response({"message": "Successfully deleted"}, status=status.HTTP_200_OK)
        return Response({"message": "Something went wrong"}, status=status.HTTP_400_BAD_REQUEST)

class InternshipCreateAPIView(generics.CreateAPIView):
    serializer_class = InternshipSerializer
    permission_classes =[]
    # def perform_create(self, serializer):
    #     """Some doc here!"""
    #     company = get_object_or_404(Company, user=request.user.id)
    #     internship = serializer.save()
    #     internship.objects.update(company=company)
    #     internship = serializer.save()
    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)
    # def post(self, request, **kwargs):
    #     company = get_object_or_404(Company, user=request.user.id)
    #     name = request.data['name']
    #     new_internship, created = Internship.objects.create(company=company, name=name)
    #     if created:
    #         new_internship.save()
    #         return Response(
    #             {"message": "You have successfully created internship",
    #             "internship-info": InternshipSerializer(new_internship).data
    #             }, status=status.HTTP_201_CREATED)
    #     return Response(status=status.HTTP_400_BAD_REQUEST)
