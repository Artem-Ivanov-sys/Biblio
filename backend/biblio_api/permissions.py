from rest_framework.permissions import BasePermission, SAFE_METHODS

class IsStaffOrAdmin(BasePermission):
    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True
        return request.user.is_authenticated and (request.user.groups.filter(name="staff").exists() \
                                                  or request.user.groups.filter(name="admin"))

class IsAdminOnly(BaseException):
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.groups.filter(name="admin").exists()
