import datetime
import decimal
from dataclasses import dataclass
from sqlalchemy import func, ForeignKey
from sqlalchemy.orm import relationship

from .product_base_fake import ProductBaseFakeModel
from ...app import db


@dataclass
class ProductVariantModel(db.Model):
    __tablename__ = 'product_variants'
    __table_args__ = {'extend_existing': True}

    id: int
    name: str
    price: float
    attribute1_id: int
    attribute2_id: int
    attribute3_id: int
    product_base_id: int
    created_at: datetime
    updated_at: datetime
    product_base: ProductBaseFakeModel

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.VARCHAR(50))
    price = db.Column(db.Float)
    created_at = db.Column(db.TIMESTAMP(), default=func.now())
    updated_at = db.Column(db.TIMESTAMP(), onupdate=func.now(), default=func.now())
    attribute1_id = db.Column(db.Integer, ForeignKey('product_attribute_values.id'))
    attribute2_id = db.Column(db.Integer, ForeignKey('product_attribute_values.id'))
    attribute3_id = db.Column(db.Integer, ForeignKey('product_attribute_values.id'))
    product_base_id = db.Column(db.Integer, ForeignKey('product_bases.id'))
    product_base = relationship("ProductBaseFakeModel", back_populates="product_variants")

    def __init__(self, name, price, attribute1_id, attribute2_id, attribute3_id, product_base_id=None):
        self.name = name
        self.price = price
        self.product_base_id = product_base_id
        self.attribute1_id = attribute1_id
        self.attribute2_id = attribute2_id
        self.attribute3_id = attribute3_id
