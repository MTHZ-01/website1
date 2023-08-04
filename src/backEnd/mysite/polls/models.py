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
    picSrc1 = models.ImageField(upload_to='')
    picSrc2 = models.ImageField(upload_to='')
    picSrc3 = models.ImageField(upload_to='')
    picSrc4 = models.ImageField(upload_to='')
    picSrc5 = models.ImageField(upload_to='')
    picSrc6 = models.ImageField(upload_to='')
    title1 = models.CharField(max_length=100)
    title2 = models.CharField(max_length=100)
    title3 = models.CharField(max_length=100)
    title4 = models.CharField(max_length=100)
    title5 = models.CharField(max_length=100)
    title6 = models.CharField(max_length=100)
    description1 = models.TextField(max_length=100)
    description2 = models.TextField(max_length=100)
    description3 = models.TextField(max_length=100)
    description4 = models.TextField(max_length=100)
    description5 = models.TextField(max_length=100)
    description6 = models.TextField(max_length=100)


