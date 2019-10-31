from rest_framework import serializers
from .models import Board, TrelloList, Card, BoardInvite
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


class MemberInviteSerializer(serializers.ModelSerializer):

    # email = forms.CharField(label='email',widget=forms.EmailInput(attrs={'placeholder':'Enter email'})) 

    class Meta:
        model = BoardInvite
        fields = ('board','email')

    