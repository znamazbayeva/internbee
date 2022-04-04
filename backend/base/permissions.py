from rest_framework.permissions import BasePermission,SAFE_METHODS

class IsOwnerProfileOrReadOnly(BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        return obj.user==request.user

class CanManageInternships(BasePermission):
    message = "You can not create Internhsips"
    def has_permission(self, request, view):
        if request.user.is_company == True or request.user.is_superuser == True:
            return True
        return False

class IsCompanyUser(BasePermission):
    def has_permission(self, request, view):

        return bool(request.user and request.user.is_company)