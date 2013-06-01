from django.shortcuts import render_to_response, redirect
from django.template import RequestContext

from social_auth.db.django_models import UserSocialAuth
from github import Github

def homepage(request):


    return render_to_response('index.html', {}, context_instance= RequestContext(request))


from django.contrib.auth import logout
def auth_logout(request):
    logout(request)
    return redirect('/')


