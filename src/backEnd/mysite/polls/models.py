import datetime
from django import forms  
from django.db import models
from django.utils import timezone




class Product(models.Model):

    # id = models.BigAutoField(primary_key=True)
    title = models.CharField(max_length=100)
    Price = models.CharField(max_length=100)
    description = models.TextField(max_length=100)
    PicSrc = models.ImageField(upload_to='images', null=True)
    publishDate = models.DateTimeField("date published", null=True)

    # pub_date = models.DateTimeField("date published")
    

    def __str__(self) -> str:
        return self.title
    

class SmallLinkAnnouncement(models.Model):
    AnnounceImage = models.ImageField(upload_to='images', null=True)
    title = models.CharField(max_length=100)
    SeeMoreLink = models.URLField(max_length=250, null=True)
    



class Slider(models.Model):
    picSrc = models.ImageField(upload_to='images')
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=100)


