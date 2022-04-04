from django.contrib.auth.models import BaseUserManager


class UserManager(BaseUserManager):
    def create_user(self, email, is_student, is_company, password=None,   **kwargs):
        if not email:
            raise ValueError("Email is required")
        print(is_student)
        if is_student == None or is_company == None:
            raise ValueError("User Type is required")
        email = self.normalize_email(email)
        user = self.model(email=email, is_student = is_student, is_company = is_company, **kwargs)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, is_student, is_company, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)
        return self.create_user(email,  is_student, is_company, password,  **extra_fields)