import datetime

from sqlalchemy import func
from dataclasses import dataclass

from sqlalchemy.orm import relationship

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
    description: str

    id = db.Column(db.Integer, primary_key=True, autoincrement=True, )
    name = db.Column(db.VARCHAR(50))
    image = db.Column(db.VARCHAR(50))
    activate = db.Column(db.Boolean())
    created_at = db.Column(db.TIMESTAMP(), default=func.now())
    updated_at = db.Column(db.TIMESTAMP(), onupdate=func.now(), default=func.now())
    description = db.Column(db.Text)
    product_bases = relationship("ProductBaseModel", back_populates="category")


    def __init__(self, name, description, image, activate=True):
        self.name = name
        self.image = image
        self.description = description
        self.activate = activate
