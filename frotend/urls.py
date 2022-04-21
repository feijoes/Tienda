import re
from django.urls import path
from .views import *

urlpatterns = [
    path('register/',form),
    path('media/images/<str:imagen>',image),
    path('',index)
]