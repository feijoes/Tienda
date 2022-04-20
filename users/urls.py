
from django.urls import path

from .views import *

urlpatterns = [
    path('', UserView.as_view()),
    path('<str:username>/', UserDetailApiView.as_view()),
]