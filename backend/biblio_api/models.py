from mongoengine import StringField, IntField, Document

class BookModel(Document):
    name = StringField(max_length=256)
    year = IntField()
