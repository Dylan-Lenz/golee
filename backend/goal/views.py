from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from goal.serializers import GoalSerializer
from goal.models import Goal


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def goals(request):
    if request.method == 'GET':
        goals = Goal.objects.filter(user_id=request.user.id)
        serializer = GoalSerializer(goals, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = GoalSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user_id=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def goal_by_id(request, pk):
    goal = get_object_or_404(Goal, pk=pk)
    if request.method == 'PUT':
        serializer = GoalSerializer(goal, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        serializer = GoalSerializer(goal, data=request.data)
        if serializer.is_valid():
            goal.delete()
            return Response(serializer.data, status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)