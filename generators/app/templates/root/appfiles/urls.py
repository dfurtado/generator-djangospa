
from django.conf.urls import include, url
from django.contrib import admin
from <%= appName %> import views
<% if (includeLoginPage == true) { %>
from <%= appName %>.forms import AuthenticationForm
from django.contrib.auth.views import login, logout
<% } %>

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
