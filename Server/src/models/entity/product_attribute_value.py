import datetime
from dataclasses import dataclass
from .role_permission import RolePermissionModel
from typing import List
from sqlalchemy import func, ForeignKey

from ...app import db


@dataclass
class ProductVariantAttributeModel(db.Model):
    __tablename__ = 'product_attribute_values'

    id: int
    product_attribute_id: int
    name: str

    id = db.Column(db.Integer(), primary_key=True)
    value = db.Column(db.VARCHAR(50))
    product_attribute_id = db.Column(db.Integer, ForeignKey('product_attributes.id'))

    def __init__(self, user_id, role_id):
        self.user_id = user_id
        self.role_id = role_id
