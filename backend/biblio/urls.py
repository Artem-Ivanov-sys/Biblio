from django.contrib import admin
from django.urls import path, include

# from rest_framework_mongoengine.routers import SimpleRouter
# from biblio_app.views import BooksList
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

# books_router = SimpleRouter()
# books_router.register("books", BooksList, basename="books")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/token/', TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path('api/token/refresh/', TokenRefreshView.as_view(), name="toket_refresh"),
    path('api/auth/', include('rest_framework.urls')),
    path('api/v1/', include('biblio_api.urls'))
]
