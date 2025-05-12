from django.urls import path, include
from rest_framework_mongoengine.routers import SimpleRouter
from biblio_api.views import BooksList, CurrentUserView

books_router = SimpleRouter()
books_router.register("books", BooksList, basename="books")

urlpatterns = [
    path('biblio/', include(books_router.urls)),
    path('me/', CurrentUserView.as_view())
]
