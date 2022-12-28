from django.urls import path
from goal import views

urlpatterns = [
    path ('goals/', views.goals),
    path ('goals/<int:pk>/', views.goals)
]