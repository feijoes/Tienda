from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from rest_framework import generics
from .serialezers import *
from django.contrib.auth import get_user_model

class UserView(generics.CreateAPIView,generics.ListAPIView):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer
   
    permission_classes = [permissions.AllowAny]
    
    


class UserDetailApiView(APIView):
    # add permission to check if user is authenticated
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self, username):

        try:
            return get_user_model().objects.get(username=username)
        except get_user_model().DoesNotExist:
            return None

    # 3. Retrieve
    def get(self, request, username, *args, **kwargs):
        
        user = self.get_object(username)
        
        if not user:
            return Response(
                {"res": "user does not exists"}, 
                status=status.HTTP_400_BAD_REQUEST
            )

        serializer = UserSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # 4. Update
    def put(self, request, username, *args, **kwargs):

        user = self.get_object(username)
        if not user:
            return Response(
                {"res": "user does not exists"}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        data = {
            'task': request.data.get('task'), 
            'completed': request.data.get('completed'), 
            'user': request.data.get
        }
        serializer = UserSerializer(instance = user, data=data, partial = True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def post(self,request,username):
        
        serializer  = AddProductsToUser(data=request.data)
        if serializer.is_valid():
            print(serializer.data)
            a ={'productos': {'rosa': '2'}}
            
            user = self.get_object(username)
            return Response(serializer.data, status=status.HTTP_200_OK)
        
        #try:
        #    for producto in serializer:
        #       print(producto)
        #except Exception:
        #    raise serializers.ValidationError({"detail": "producto nao existe"})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        
        
        
        

    