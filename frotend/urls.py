import re
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import *

urlpatterns = [
    path('register/',form),
    path('media/images/<str:imagen>',image),
]