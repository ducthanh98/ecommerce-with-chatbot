import datetime

from sqlalchemy import func
from dataclasses import dataclass
from ...app import db


@dataclass
class CategoryModel(db.Model):
    __tablename__ = 'categories'
    id: int
    name: str
    image: str
    activate: bool
    created_at: datetime
    updated_at: datetime

    id = db.Column(db.Integer, primary_key=True, autoincrement=True, )
    name = db.Column(db.VARCHAR(50))
    image = db.Column(db.VARCHAR(50))
    activate = db.Column(db.Boolean())
    created_at = db.Column(db.TIMESTAMP(), default=func.now())
    updated_at = db.Column(db.TIMESTAMP(), onupdate=func.now(), default=func.now())

    def __init__(self, name, image, activate=True):
        self.name = name
        self.image = image
