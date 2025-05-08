from rest_framework import viewsets, mixins, generics
from .models import BookModel
from .serializers import BookSerializer
from .permissions import IsStaffOrAdmin

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
