from rest_framework.permissions import BasePermission, SAFE_METHODS

class IsStaffOrAdmin(BasePermission):
    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True
        user = request.user
        if not user or not user.is_authenticated:
            return False
        return user.groups.filter(name__in=["staff", "admin"]).exists()

# class IsAdminOnly(BaseException):
#     def has_permission(self, request, view):
#         return request.user.is_authenticated and request.user.groups.filter(name="admin").exists()
