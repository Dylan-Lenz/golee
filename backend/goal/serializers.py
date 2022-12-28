from rest_framework import serializers
from .models import Goal
from authentication.models import User


class GoalSerializer(serializers.ModelSerializer):

    class Meta:
        model = Goal
        fields = [
            'id', 
            'goal_name', 
            'influence_name', 
            'influence_value', 
            'is_current',
            'user_id',
        ]