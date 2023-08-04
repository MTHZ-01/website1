from django.contrib import admin

# Register your models here.
from .models import Product , SmallLinkAnnouncement , Slider

# admin.site.register(Question)
admin.site.register(Product)
admin.site.register(SmallLinkAnnouncement)
admin.site.register(Slider)