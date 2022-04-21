
from django.shortcuts import render
from django.http import FileResponse
# Create your views here.
def form(request):
    file = '\\'.join(__file__.split('\\')[:-1]) + '/templates/registro.html'
    return render(request, file)

def index(request):
    return render(request, 'frontend/index.html')

def image(request,imagen):
    
    file = '\\'.join(__file__.split('\\')[:-2]) + f'\\media\\images\\{imagen}'
    img = open(file, 'rb')
    return FileResponse(img)
     
