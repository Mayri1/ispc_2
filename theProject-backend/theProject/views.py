from django.http import HttpResponse
#Resquests
#http responsive sending requestes using protocls HTTP
#This is a view 
def bienvenida(request): # paasing object as a first arg
    return HttpResponse ("Bienvenid@ a su espacio Padel Club. ")


#try it with these comands: on cmd 
#cd theProject-backend
#python manage.py runserver
#http://127.0.0.1:8000/
#http://127.0.0.1:8000/bienvenida/  #Comment outof the command/bienvenida comes from the path of urls

def bienvenidaRojo(request): # paasing object as a first arg
    return HttpResponse ("<p style='color: red;'>Bienvenid@ a su espacio Padel Club.<p> ")

#try it with these comands: on cmd 
#cd theProject-backend
#python manage.py runserver
#http://127.0.0.1:8000/
#http://127.0.0.1:8000/bienvenidaRed/  #Comment outof the command/bienvenida comes from the path of urls
