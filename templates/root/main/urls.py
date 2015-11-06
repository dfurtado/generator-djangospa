from django.conf.urls import url, include
from <%= appName %> import views
from rest_framework.routers import DefaultRouter

# Creat a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'sample', views.SampleViewSet)
router.register(r'users', views.UserViewSet)

# The API URLs are now determined automatically by the router.
# Additionally, we include the login URLs for the browsable API.
urlpatterns = [
    url(r'^api/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
