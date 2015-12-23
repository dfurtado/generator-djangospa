
from django.conf.urls import include, url, patterns
from django.contrib import admin
<% if (includeLoginPage == true) { %>
from <%= appName %>.forms import AuthenticationForm
from <%= appName %> import views
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
