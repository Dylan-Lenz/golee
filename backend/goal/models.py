from django.db import models
from authentication.models import User


class Goal(models.Model):
     user_id = models.ForeignKey(User, on_delete=models.CASCADE)
     goal_name = models.CharField(max_length=50)
     influence_name = models.CharField(max_length=50)
     influence_value = models.IntegerField()
     is_current = models.BooleanField('current goal', default=False)