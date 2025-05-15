from mongoengine import StringField, Document, EmbeddedDocumentListField, EmbeddedDocument, EmbeddedDocumentField, IntField, ListField

class ResponsibilityItem(EmbeddedDocument):
    surname = StringField(max_length=128, null=True)
    name = StringField(max_length=128, null=True)
    middlename = StringField(max_length=128, null=True)
    role = StringField(max_length=64, null=True)

class TitleAndResponsibilityArea(EmbeddedDocument):
    main_title = StringField(max_length=256, null=True)
    parallel_title = StringField(max_length=256, null=True)
    surname = StringField(max_length=128, null=True)
    initials = StringField(max_length=8, null=True)
    responsibility = EmbeddedDocumentListField(ResponsibilityItem)
    title_information = IntField(choices=(
        (0, "Посібник"),
        (1, "Навчальне видання")
    ))

class EditionArea(EmbeddedDocument):
    edition_title = StringField(max_length=256, null=True)
    edition_information = StringField(max_length=256, null=True)

class PublicationArea(EmbeddedDocument):
    publication_place = ListField(StringField(max_length=128, null=True))
    publisher = StringField(max_length=128, null=True)
    year = IntField()

class BookModel(Document):
    title_and_responsibility_area = EmbeddedDocumentField(TitleAndResponsibilityArea)
    edition_area = EmbeddedDocumentField(EditionArea)
    publication_area = EmbeddedDocumentField(PublicationArea)

    meta = {
        "allow_inheriatance": True
    }
