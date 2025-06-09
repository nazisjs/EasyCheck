from django.urls import path
from . import views


urlpatterns = [
    path("accounts/login/", views.loginUser, name="home"),
    path("dashboard/", views.dashboard, name="dashboard"),
    path("register/", views.registerUser, name="register"),
    path("check/",views.check,name="check"),
    path("report/",views.report,name="report"),
    
] 
