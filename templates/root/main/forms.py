from django import forms
from django.contrib.auth.forms import AuthenticationForm

class AuthenticationForm(AuthenticationForm):
    username = forms.CharField(max_length=50, widget=forms.TextInput({
            'class': 'form-control',
            'placeholder': 'User name'
    }))

    password = forms.CharField(label="Password", widget=forms.PasswordInput({
        'class': 'form-control',
        'placeholder':'Password'
    }))
