from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from rest_framework.filters import SearchFilter, OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend
from .models import Policy
from .serializers import PolicySerializer
from rest_framework import viewsets
from .filters import PolicyFilter
from .custom_backend import NoFormDjangoFilterBackend

# class PolicyList(generics.ListAPIView):
class PolicyList(viewsets.ModelViewSet):
    queryset = Policy.objects.all()
    serializer_class = PolicySerializer
    filterset_class = PolicyFilter
    # filter_backends = [SearchFilter, OrderingFilter]
    filter_backends = [SearchFilter, NoFormDjangoFilterBackend, OrderingFilter]

    search_fields = ['name']
    ordering_fields = ['premium']

