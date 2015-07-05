from django.shortcuts import render
from django.template import RequestContext, loader

# Create your views here.

def index(request):
	context = RequestContext({})
	return render(request, 
		'<%= appName %>/index.html', 
		context_instance = RequestContext(request, {})
	)