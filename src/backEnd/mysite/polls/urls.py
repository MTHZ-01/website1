from django.urls import path


from . import views

urlpatterns = [
    path("index", views.index, name="index"),
    path("getProd", views.get_all_products, name="GetProds"),
    path("GetAnnounce", views.getSMLAnnounce, name="GetAnnounce"),
    path("Slider", views.SliderData, name=""),
]