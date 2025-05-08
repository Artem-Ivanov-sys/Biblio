from rest_framework_mongoengine import serializers as mongo_serializer
# from rest_framework import serializers
# from django.contrib.auth.models import User
from .models import BookModel

class BookSerializer(mongo_serializer.DocumentSerializer):
    class Meta:
        model = BookModel
        fields = "__all__"

# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ["id", "username", "password"]
#         extra_kwargs = {"password": {"write_only": True}}
    
#     def create(self, validated_data):
#         user = User.objects.create_user(**validated_data)
#         return user
