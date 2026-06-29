from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    # To be filled later for apps:
    # path('api/', include('api.urls')),
    path('accounts/', include('allauth.urls')),
]
