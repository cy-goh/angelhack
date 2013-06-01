from django.db import models

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
    
class Contest(models.Model):


    def get_absolute_url(self):
        pass
