<% if (djangoVersion != '2.0') { %>
from django.conf.urls import url, include
<% } else { %>
from django.urls import path, include
<% } %>
from rest_framework.routers import DefaultRouter
from <%= appName %> import views

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'sample', views.SampleViewSet)
router.register(r'page', views.PageViewSet)
router.register(r'item', views.ItemViewSet)
router.register(r'users', views.UserViewSet)

# The API URLs are now determined automatically by the router.
# Additionally, we include the login URLs for the browsable API.
<% if (djangoVersion != '2.0') { %>
urlpatterns = [
    url(r'^api/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
<% } else { %>
urlpatterns = [
    path(r'api/', include(router.urls)),
    path(r'api-auth', include('rest_framework.urls', namespace='rest_framework'))
]
<% } %>
