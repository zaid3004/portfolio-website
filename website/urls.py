from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("recruiter", views.recruiters, name="recruiters"),
    path("university", views.university, name="university"),
    path("developer", views.developer, name="developer"),
    path("other", views.other, name="other")
]
