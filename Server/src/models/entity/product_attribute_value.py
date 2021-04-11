from dataclasses import dataclass
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship

from ...app import db


@dataclass
class ProductAttributeValueModel(db.Model):
    __tablename__ = 'product_attribute_values'

    id: int
    product_attribute_id: int
    value: str

    id = db.Column(db.Integer(), primary_key=True)
    value = db.Column(db.VARCHAR(50))
    product_attribute_id = db.Column(db.Integer, ForeignKey('product_attributes.id'))
    attribute = relationship('ProductAttributeModel', lazy=True, back_populates="values")

    def __init__(self, value, product_attribute_id=None):
        self.value = value
