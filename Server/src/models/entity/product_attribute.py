import datetime
from dataclasses import dataclass
from .role_permission import RolePermissionModel
from typing import List
from sqlalchemy import func, ForeignKey

from ...app import db


@dataclass
class ProductAttributeModel(db.Model):
    __tablename__ = 'product_attributes'

    id: int
    name: str

    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.VARCHAR(50))
    product_attributes_values = db.relationship('ProductAttributeValueModel', lazy=True)

    def __init__(self, name, product_attributes_values):
        self.name = name
        self.product_attributes_values = product_attributes_values
