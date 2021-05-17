import datetime
from dataclasses import dataclass

from sqlalchemy.orm import relationship

from typing import List
from sqlalchemy import func

from ...app import db


@dataclass
class ProductBaseFakeModel(db.Model):
    __tablename__ = 'product_bases'
    __table_args__ = {'extend_existing': True}

    id: int
    name: str
    description: str
    activate: bool
    created_at: datetime
    updated_at: datetime
    images: List[str]

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.VARCHAR(50))
    description = db.Column(db.Text)
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'))
    activate = db.Column(db.Boolean)
    images = db.Column(db.ARRAY(db.VARCHAR(50)))
    created_at = db.Column(db.TIMESTAMP(), default=func.now())
    updated_at = db.Column(db.TIMESTAMP(), onupdate=func.now(), default=func.now())
    product_variants = relationship("ProductVariantModel", lazy=True)

    def __init__(self, name, description, images, category_id, activate=True):
        self.name = name
        self.description = description
        self.activate = activate
        self.images = images
        self.category_id = category_id
