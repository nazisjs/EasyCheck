from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm
from .models import Report

# Create your views here.

from django.shortcuts import render, redirect
from django.contrib.auth import login
from .forms import RegisterForm

def registerUser(request):
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('dashboard')  # или куда хочешь после регистрации
    else:
        form = RegisterForm()
    return render(request, 'register.html', {'form': form})

def loginUser(request):
    form=UserCreationForm()
    return render(request,"login.html",{"form":form})

def dashboard(request):
    reports=Report.objects.all()
    return render(request,"dashboard.html",{'reports':reports})

def check(request):
    reports = Report.objects.all()
    return render(request, 'check.html', {'reports': reports})

def report(request):
    return render(request,"report.html")