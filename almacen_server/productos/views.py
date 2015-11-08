from django.conf.urls import url, include
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets
from productos.models import Categoria

# Serializers define the API representation.


class UserSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'is_staff')

# ViewSets define the view behavior.


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class CategoriaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Categoria
        #fields = ( 'codigo', 'nombre', 'activo')

# ViewSets define the view behavior.


class CategoriaViewSet(viewsets.ModelViewSet):  # get post put delete
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer
