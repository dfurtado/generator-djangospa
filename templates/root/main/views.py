from django.contrib.auth.models import User
from <%= appName %>.models import Sample
from <%= appName %>.serializers import SampleSerializer
from <%= appName %>.serializers import UserSerializer
from rest_framework import generics
from rest_framework import permissions
from <%= appName %>.permissions import IsOwnerOrReadOnly
from rest_framework.response import Response
from rest_framework import renderers
from rest_framework import viewsets
from rest_framework.decorators import detail_route
from django.shortcuts import render
from django.template import RequestContext, loader

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

	@detail_route(renderer_classes=[renderers.StaticHTMLRenderer])
	def perform_create(self, serializer):
		serializer.save(owner=self.request.user)

class UserViewSet(viewsets.ReadOnlyModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer

def index(request):
	context = RequestContext({})
	return render(request, 
		'<%= appName %>/index.html', 
		context_instance = RequestContext(request, {})
	)
