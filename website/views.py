from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, "website/index.html")

def recruiters(request):
    return render(request, "website/recruiters.html")

def university(request):
    return render(request, "website/university.html")

def developer(request):
    return render(request, "website/developer.html")

def other(request):
    return render(request, "website/other.html")
