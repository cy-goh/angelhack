from django.shortcuts import render_to_response, redirect, get_object_or_404
from django.template import RequestContext

from social_auth.db.django_models import UserSocialAuth
from reputation.models import Reputation
from main.models import Contest, ContestUpdate
from github import Github

def homepage(request):
    return render_to_response('index.html', {}, context_instance= RequestContext(request))

from django.contrib.auth import logout

def create_comment(request):
    pass

def project_details(request, pid):
    instance = get_object_or_404(Contest, pk = pid)
    contestants = []
    for c in instance.contestant.all():
        comments = ContestUpdate.objects.filter(contest = instance, to_user = c) 
        contestants.append({"contestant": c, "comments": comments})
    return render_to_response('contest_details.html', {'contest': instance, "contestants": contestants}, context_instance = RequestContext(request)) 

def project_page(request, pid):
    get_object_or_404(Contest, pk = pid)
    json_url = '/api/v1/contest/%s/' %pid
    return render_to_response('contest.html', {"resource_url": json_url}, context_instance = RequestContext(request))

def auth_logout(request):
    logout(request)
    return redirect('/')

def signup_complete(request):
    user = request.user
    reputation = Reputation.objects.reputation_for_user(user)
    projects = Contest.objects.all()[:5]

    return render_to_response("signup_complete.html", {"user": user, "reputation": reputation, "projects": projects }, context_instance = RequestContext(request))
    
