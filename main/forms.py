from django.forms import ModelForm
from main.models import ContestUpdate

class CommentForm(ModelForm):
    class Meta:
        model = ContestUpdate

    
