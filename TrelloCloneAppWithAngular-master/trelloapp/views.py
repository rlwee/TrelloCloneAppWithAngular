from django.shortcuts import render, get_object_or_404
from rest_framework import generics, permissions, renderers, viewsets, status

from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework.decorators import api_view, action, authentication_classes, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response  import Response
from rest_framework.reverse import reverse
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from trelloapp.models import Board, TrelloList, Card
from .serializers import BoardSerializer,TrelloListSerializer, CardSerializer, UserSerializer

from django.contrib.auth import authenticate,login
from django.contrib.auth.models import User


from .permissions import IsOwnerOrReadOnly

from django.views.decorators.csrf import csrf_exempt


# Create your views here.
# @api_view(['GET']) # new
# @authentication_classes([TokenAuthentication])
# @permission_classes([IsAuthenticated])
# def api_root(request, format=None):
#     return Response({
#         'users': reverse('users', request=request, format=format),
#         'boards': reverse('boards', request=request, format=format),
#         'lists': reverse('lists', request=request, format=format),
#         'cards': reverse('cards', request=request, format=format)
#     })


# @api_view(['GET'])
# @authentication_classes([SessionAuthentication, BasicAuthentication])
# @permission_classes([IsAuthenticated])
# def view(request, format=None):
#     content = {
#         'user': unicode(request.user),
#         'auth': unicode(request.auth)
#     }
#     return Response(content)





class BoardViewSet(viewsets.ViewSet):

    
    queryset = ''
    serializer_class = BoardSerializer
    # authentication_classes = [TokenAuthentication]
    # permission_classes = [AllowAny,]
    
    def board_list(self, request, **kwargs):
        boards = Board.objects.filter(owner=request.user)
        serializer = self.serializer_class(boards, many=True)
        
        return Response(serializer.data, status=200)
    
    
    def board_create(self, request, **kwargs):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            serializer = serializer.save(owner=request.user)
            return Response(serializer.title, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=400)

    def board_detail(self, request, **kwargs):
        board = get_object_or_404(Board, id=kwargs.get('board_id'))
        serializer = self.serializer_class(board)
        return Response(serializer.data, status=200)

    def board_archive(self, request, **kwargs):
        board = get_object_or_404(Board, id=kwargs.get('board_id'))
        board.archive = True
        board.save()

        serializer = self.serializer_class(board)
        return Response(serializer.data, status=200)

    def board_delete(self,request,**kwargs):
        id = kwargs.get('board_id')
        boards = Board.objects.get(pk=id, owner=request.user)
        boardID = Board.objects.get(pk=id, owner=request.user)
        if request.user.is_authenticated:
            boards.delete()
            return Response(status=200)


class TrelloListViewSet(viewsets.ViewSet):

    queryset = ''
    serializer_class = TrelloListSerializer

    def trello_list(self, request, **kwargs):
        # blists = TrelloList.objects.all()
        #import pdb; pdb.set_trace()

        id = kwargs.get('board_id')
        board = get_object_or_404(Board, pk=id)
        blists = TrelloList.objects.filter(board=board)
        serializer = self.serializer_class(blists, many=True)
        return Response(serializer.data, status=200)

    def trello_list_create(self, request, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            # import pdb; pdb.set_trace()
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=400)

    def trello_list_detail(self, request, **kwargs):
        blists = get_object_or_404(TrelloList, id=kwargs.get('list_id'), board_id=kwargs.get('board_id'))
        serializer = self.serializer_class(blists)
        return Response(serializer.data, status=200)

    def trello_list_archive(self, request, **kwargs):
        blists = get_object_or_404(TrelloList, id=kwargs.get('list_id'), baord_id=kwargs.get('board_id'))
        blists.archive = True
        blists.save()

        serializer = self.serializer_class(blists)
        return Response(serializer.data, status=200)
        

    def trello_list_delete(self, request, **kwargs):
        board_id = kwargs.get('board_id')
        list_id = kwargs.get('list_id')
        board = get_object_or_404(Board, id=board_id)
        blist = get_object_or_404(TrelloList, id=list_id, board_id=board_id)
        listID = get_object_or_404(TrelloList, id=list_id, board_id=board_id)
        tlist = TrelloList.objects.get(id=list_id, board_id=board_id)
        if request.user.is_authenticated:
            blist.delete()
            return Response(status=200)


class CardViewSet(viewsets.ViewSet):

    queryset = ''
    serializer_class = CardSerializer

    def card_list(self, request, **kwargs):
        board_id = kwargs.get('board_id')
        list_id = kwargs.get('list_id')
        board_list = get_object_or_404(TrelloList, pk=list_id)
        cards = Card.objects.filter(trello_list=board_list, archive=False)
        serializer = self.serializer_class(cards, many=True)
        return Response(serializer.data, status=200)

    def card_create(self, request, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=400)

    def card_detail(self, request, **kwargs):
        cards = get_object_or_404(Card, id=kwargs.get('card_id'), trello_list_id=kwargs.get('list_id'))
        serializer = self.serializer_class(cards)
        return Response(serializer.data, status=200)

    def card_archive(self, request, **kwargs):
        cards = get_object_or_404(Card, id=kwargs.get('card_id'), trello_list_id=kwargs.get('list_id'))
        cards.archive = True
        cards.save()

        serializer = self.serializer_class(cards)
        return Response(serializer.data, status=200)



class UserViewSet(viewsets.ViewSet):

    serializer_class = UserSerializer

    # permission_classes = {AllowAny,}
    permission_classes = [AllowAny]

    def user_view(self, request, **kwargs):
        users = User.objects.all()
        serializer = self.serializer_class(users, many=True)
        
        return Response(serializer.data)

     
    def user_login(self, request, **kwargs):
        print('userloginz')
        username = request.data.get('username')
        password = request.data.get('password') 
        user = authenticate(request, username=username, password=password)
        # userA = User.objects.get(username=user)
        # import pdb; pdb.set_trace()
        if user is not None:
            token = Token.objects.get(user=user)
            print(token.key, 'token')
            return Response(token.key, status=200)
        return Response(status=400)
            
    
    def user_create(self, request, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer = serializer.save()
            return Response(serializer.username, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=400)
    
    def user_detail(self, request, **kwargs):
        users = get_object_or_404(User, id=kwargs.get('user_id'))
        serializer = self.serializer_class(users)
        return Response(serializer.data, status=200)
    