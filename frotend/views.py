from django.http import HttpResponse
from django.shortcuts import render
from django.http import FileResponse
# Create your views here.
def form(request):
    print(request)
    file = '\\'.join(__file__.split('\\')[:-1]) + '/templates/registro.html'
    return render(request, file)

def image(request,imagen):
    
    file = '\\'.join(__file__.split('\\')[:-2]) + f'\\media\\images\\{imagen}'
    img = open(file, 'rb')
    return FileResponse(img)
     
