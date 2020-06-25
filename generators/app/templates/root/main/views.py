from django.contrib.auth.models import User
from django.shortcuts import render
from django.template import RequestContext, loader

from <%= appName %>.models import Sample
from <%= appName %>.models import Page, Item
from <%= appName %>.serializers import SampleSerializer, PageSerializer, ItemSerializer, UserSerializer
from <%= appName %>.permissions import IsOwnerOrReadOnly

from rest_framework import generics, permissions, renderers, viewsets
from rest_framework.response import Response


try:
    from rest_framework.decorators import detail_route as action
except ImportError:
    from rest_framework.decorators import action


# Create your views here.

class SampleViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides 'list', 'create', 'retrieve',
    'update', and 'destroy' actions.
    """
    queryset = Sample.objects.all()
    serializer_class = SampleSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,
                          IsOwnerOrReadOnly,)

    @action(detail=True, renderer_classes=[renderers.StaticHTMLRenderer])
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class PageViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides 'list', 'create', 'retrieve',
    'update', and 'destroy' actions.
    """
    queryset = Page.objects.all()
    serializer_class = PageSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,
                          IsOwnerOrReadOnly,)

    @action(detail=True, renderer_classes=[renderers.StaticHTMLRenderer])
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)        

class ItemViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides 'list', 'create', 'retrieve',
    'update', and 'destroy' actions.
    """
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,
                          IsOwnerOrReadOnly,)

    @action(detail=True, renderer_classes=[renderers.StaticHTMLRenderer])
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)        

class UserViewSet(viewsets.ReadOnlyModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer

def index(request):
    return render(request, 
        '<%= appName %>/index.html', 
        {'context_instance': RequestContext(request, {})}
    )
