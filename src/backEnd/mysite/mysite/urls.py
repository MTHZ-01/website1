from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("polls/", include("polls.urls")),
    path("admin/", admin.site.urls),
    # path("images/", include("images"))
  
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
  