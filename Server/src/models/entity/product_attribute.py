from dataclasses import dataclass
from typing import List

from sqlalchemy.orm import relationship

from .product_attribute_value import ProductAttributeValueModel
from ...app import db


@dataclass
class ProductAttributeModel(db.Model):
    __tablename__ = 'product_attributes'

    id: int
    name: str
    values: List[ProductAttributeValueModel]

    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.VARCHAR(50))
    product_base_id = db.Column(db.Integer, db.ForeignKey('product_bases.id'))
    values = relationship('ProductAttributeValueModel', lazy=True, back_populates="attribute")

    def __init__(self, name, product_attributes_values):
        self.name = name
        self.values = product_attributes_values
