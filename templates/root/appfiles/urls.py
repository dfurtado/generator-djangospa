"""template URL Configuration
The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url, patterns
from django.contrib import admin
<% if (includeLoginPage == true) { %>
from <%= appName %>.forms import AuthenticationForm
from <%= appName %> import views
<% } %>

urlpatterns = [
    url(r'^$', views.index, name="index"),
    url(r'^', include('<%= appName %>.urls')),
    url(r'^admin/', include(admin.site.urls)),
]

<% if (includeLoginPage == true) { %>
#urlpatterns += patterns(
#    'django.contrib.auth',
#    url(r'^accounts/login/$', 'views.login', {
#        'template_name': 'login.html', 
#        'authentication_form': AuthenticationForm
#    }, name='login'),
#    url(r'^accounts/logout/$', 'views.logout', {
#        'next_page': '/'
#    }, name='logout'),
#)
<% } %>
