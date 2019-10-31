from django.contrib import admin
from .models import Board, TrelloList, Card, BoardInvite

# Register your models here.

admin.site.register(Board)
admin.site.register(TrelloList)
admin.site.register(Card)
admin.site.register(BoardInvite)