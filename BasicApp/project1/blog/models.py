from django.db import models
from django.urls import reverse

# Create your models here.
class Posting(models.Model):
    title = models.CharField(max_length=200)
    author = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    body = models.TextField()
    
    def __str__(self):
        return self.title
    
    def get_absolute_url(self):
        return reverse("post_details", args=[str(self.id)])

