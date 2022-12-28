from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from goal.models import Goal
from goal.serializers import GoalSerializer


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def goals(request):
   if request.method == 'GET':
        goals = Goal.objects.filter(user_id=request.user.id)
        serializer = GoalSerializer(goals, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)