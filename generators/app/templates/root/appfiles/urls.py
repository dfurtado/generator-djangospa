<% if (djangoVersion != '2.0') { %>
from django.conf.urls import url, include
<% } else { %>
from django.urls import path, include
<% } %>
from django.contrib import admin
from <%= appName %> import views
<% if (includeLoginPage == true) { %>
from <%= appName %>.forms import AuthenticationForm
from django.contrib.auth.views import login, logout
<% } %>

<% if (djangoVersion != '2.0') { %>
urlpatterns = [
    url(r'^$', views.index, name="index"),
    url(r'^', include('<%= appName %>.urls')),
    url(r'^admin/', include(admin.site.urls)),
]

<% if (includeLoginPage == true) { %>
urlpatterns += [
    url(r'^accounts/login/$', login, {
        'template_name': 'login.html',
        'authentication_form': AuthenticationForm
    }, name='login'),
    url(r'^accounts/logout/$', logout, {
        'next_page': '/'
    }, name='logout'),
]
<% } %>
<% } else { %>
urlpatterns = [
    path(r'', views.index, name="index"),
    path(r'', include('<%= appName %>.urls')),
    path(r'admin/', admin.site.urls),
]
<% if (includeLoginPage == true) { %>
urlpatterns += [
    path(r'accounts/login', login, {
        'template_name': 'login.html',
        'authentication_form': AuthenticationForm
    }, name='login'),
    path(r'accounts/logout', logout, {
        'next_page': '/'
    }, name='logout'),
]
<% } %>
<% } %>
