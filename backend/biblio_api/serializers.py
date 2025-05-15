from rest_framework_mongoengine import serializers as mongo_serializer
from .models import BookModel

class BookSerializer(mongo_serializer.DocumentSerializer):
    class Meta:
        model = BookModel
        fields = "__all__"
