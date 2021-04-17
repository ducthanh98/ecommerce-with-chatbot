import datetime
from dataclasses import dataclass

from sqlalchemy.orm import relationship

from typing import List
from sqlalchemy import func

from . import CategoryModel, ProductVariantModel, ProductAttributeModel
from ...app import db


@dataclass
class ProductBaseModel(db.Model):
    __tablename__ = 'product_bases'

    id: int
    name: str
    description: str
    activate: bool
    created_at: datetime
    updated_at: datetime
    images: List[str]
    product_attributes: List[ProductAttributeModel]
    product_variants: List[ProductVariantModel]
    category: CategoryModel

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.VARCHAR(50))
    description = db.Column(db.Text)
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'))
    activate = db.Column(db.Boolean)
    images = db.Column(db.ARRAY(db.VARCHAR(50)))
    created_at = db.Column(db.TIMESTAMP(), default=func.now())
    updated_at = db.Column(db.TIMESTAMP(), onupdate=func.now(), default=func.now())
    category = relationship("CategoryModel", back_populates="product_bases")
    product_attributes = relationship("ProductAttributeModel", lazy=True)
    product_variants = relationship("ProductVariantModel", lazy=True)

    def __init__(self, name, description, images, category_id, activate=True):
        self.name = name
        self.description = description
        self.activate = activate
        self.images = images
        self.category_id = category_id
