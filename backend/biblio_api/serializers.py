from rest_framework_mongoengine import serializers as mongo_serializer
# from rest_framework import serializers
from .models import BookModel
# from django.contrib.auth.models import User

class BookSerializer(mongo_serializer.DocumentSerializer):
    class Meta:
        model = BookModel
        fields = "__all__"
