from rest_framework import filters
from insurance_api.models import Policy
import django_filters

class PolicyFilter(django_filters.FilterSet):
    class Meta:
        model = Policy
        fields = {
        'policy_type': ['exact'],
        'premium': ['exact', 'gte', 'lte'],
        'coverage_amount': ['exact', 'gte', 'lte'],
    }