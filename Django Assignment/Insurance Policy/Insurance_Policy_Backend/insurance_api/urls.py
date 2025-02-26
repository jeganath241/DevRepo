from django.urls import path
from .views import PolicyList
from rest_framework import routers

# urlpatterns = [
#     path('polices', PolicyList.as_view(), name='policy-list'),
# ]

router = routers.DefaultRouter()
router.register(r'policies', PolicyList, 'policies')
urlpatterns = router.urls