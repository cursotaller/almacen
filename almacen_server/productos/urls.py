from django.conf.urls import url, include
from rest_framework import routers
from productos.views import UserViewSet, CategoriaViewSet

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'categorias', CategoriaViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),

]
