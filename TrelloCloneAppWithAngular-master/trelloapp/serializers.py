from rest_framework import serializers
from .models import Board, TrelloList, Card
from django.contrib.auth.models import User, Group
from django import forms
from rest_framework.validators import UniqueValidator




class BoardSerializer(serializers.HyperlinkedModelSerializer):
    owner = serializers.CharField(read_only=True, source='owner.username')

    class Meta:
        model = Board
        fields = ('id',
                  'title',
                  'date_created',
                  'owner',
                  'archive')




class UserSerializer(serializers.ModelSerializer):
   class Meta:
       model = User
       fields = ('username', 'password', 'email', )
   def create(self, validated_data):
       user = User.objects.create_user(
           email = validated_data['email'],
           username = validated_data['username'],
           password = validated_data['password'],
       )
       return user



class TrelloListSerializer(serializers.ModelSerializer):

    class Meta:
        model = TrelloList
        fields = "__all__"

class CardSerializer(serializers.ModelSerializer):

    class Meta:
        model = Card
        fields = ('id',
                  'title',
                  'labels',
                  'date_created',
                  'trello_list',
                  'archive')


# class SignUpSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = User


# class SignUpSerializer(UserCreationForm):
#     first_name = forms.CharField(max_length=20, required=False,help_text='Optional.')
#     last_name = forms.CharField(max_length=20,required=False, help_text='Optional.')
#     email = forms.EmailField(max_length=20,help_text='Required! Enter a valid email address')

#     class Meta:
#         model = User
#         fields = ('username','first_name',
#                   'last_name','email',
#                   'password1','password2',
#                  )