# custom_backend.py
from django_filters.rest_framework.backends import DjangoFilterBackend

class NoFormDjangoFilterBackend(DjangoFilterBackend):
    def to_html(self, request, queryset, view):
        return ''  # Only override HTML rendering
