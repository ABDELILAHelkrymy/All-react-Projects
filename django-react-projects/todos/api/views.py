from pydoc import visiblename
from rest_framework import viewsets
from .serializers import TodoSerializer
from todos.models import Todo

class TodoViewSet(visiblename.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer