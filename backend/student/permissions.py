from rest_framework.permissions import BasePermission,SAFE_METHODS

class IsStudentUser(BasePermission):
    def has_permission(self, request, view):

        return bool(request.user and request.user.is_student)

