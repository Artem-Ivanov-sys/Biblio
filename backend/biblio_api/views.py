from rest_framework import viewsets, mixins, views
from rest_framework.response import Response
from .models import BookModel
from .serializers import BookSerializer
from .permissions import IsStaffOrAdmin
from rest_framework.permissions import IsAuthenticated

class CurrentUserView(views.APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        return Response({
            "username": user.username,
            "first_name": user.first_name,
            "last_name": user.last_name,
            "email": user.email
        })

class BooksList(viewsets.GenericViewSet,
                mixins.ListModelMixin,
                mixins.CreateModelMixin,
                mixins.UpdateModelMixin,
                mixins.DestroyModelMixin,
                mixins.RetrieveModelMixin):
    serializer_class = BookSerializer
    permission_classes = [IsStaffOrAdmin]

    def get_queryset(self):
        return BookModel.objects.all()
