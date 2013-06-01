from django.db import models
from django.contrib.auth.models import User
from github import Github
from reputation.models import Reputation
import datetime
import uuid
import os

def create_fn(instance, filename):
    extension = filename.split('.')[-1]
    uuid_str = str(uuid.uuid4())
    new_filename = os.path.join(uuid_str, extension) 

    return new_filename


class Company(models.Model):
    description = models.TextField()
    profile_image = models.ImageField(upload_to= create_fn)
    name = models.CharField(max_length = 50)
    url =  models.URLField()

    def get_absolute_url(self):
        pass

class CompanyRepresentative(models.Model):
    user = models.ForeignKey(User)
    company = models.ForeignKey(Company)
    position = models.CharField(max_length = 50)
    
class Contest(models.Model):
    date_added = models.DateField(auto_now_add = True)
    duration_days =  models.IntegerField()
    company = models.ForeignKey(Company)
    contestant = models.ManyToManyField(User)
    #entry_criteria = models.
    
    def extend_contest(self, days):
        new_date = self.date_added + datetime.datetime.timedelta(days = days)
        self.date_added = new_date
        self.save()
    
    def get_remaining_days(self):
        """ gets number of days left till end of competition """
        deadline = self.date_added + datetime.datetime.timedelta(days = self.duration_days)
        days_left = datetime.date.today() - deadline
        return days_left

    def get_absolute_url(self):
        pass

class UserProfile(models.Model):
    user_type_choice = ((1, 'Developer'), (2, 'Company Representative'),)
    user_type = models.IntegerField(choices = user_type_choice)
    user = models.OneToOneField(User)
    join_date = models.DateField(auto_now_add = True)


def reputation_pipeline( **kwargs):
    if kwargs['is_new']:
        github_token = kwargs['social_user'].extra_data['access_token']
        reputation_points = generate_reputation_points(github_token)

        r = Reputation(reputation = reputation_points, user =  kwargs['user'])
        r.save()



def generate_reputation_points(token):
    user = Github(token).get_user()
    num_followers = 0 

    for f in user.get_followers():
        num_followers += 1
    
    num_starred = 0
    num_forks = 0
    num_subscribers = 0

    for repo in user.get_repos():
        for  s in repo.get_stargazers():
            num_starred += 1

        #forks = len(repo.get_forks())
        for f in repo.get_forks():
            num_forks += 1

        #subscribers = len(repo.get_subscribers())
        for s in repo.get_subscribers():
            num_subscribers += 1

    start_points = num_followers + num_starred + num_forks + num_subscribers 
    return start_points
   
    



