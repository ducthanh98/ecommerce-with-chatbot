import datetime
from dataclasses import dataclass

from sqlalchemy.orm import relationship

from typing import List
from sqlalchemy import func

from . import ProductVariantModel
from ...app import db


@dataclass
class OrderItemModel(db.Model):
    __tablename__ = 'order_items'

    id: int
    product_variant: ProductVariantModel
    price: float
    quantity: int

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    product_variant_id = db.Column(db.Integer, db.ForeignKey('product_variants.id'))
    order_id = db.Column(db.Integer, db.ForeignKey('orders.id'))
    price = db.Column(db.Float)
    quantity = db.Column(db.Integer)
    product_variant = relationship("ProductVariantModel", lazy=True)


    def __init__(self, order_id, product_variant_id, price, quantity):
        self.product_variant_id = product_variant_id
        self.order_id = order_id
        self.price = price
        self.quantity = quantity
