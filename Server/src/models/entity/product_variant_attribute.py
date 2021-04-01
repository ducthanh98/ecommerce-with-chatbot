import datetime
from dataclasses import dataclass
from .role_permission import RolePermissionModel
from typing import List
from sqlalchemy import func, ForeignKey

from ...app import db


@dataclass
class ProductVariantAttributeModel(db.Model):
    __tablename__ = 'product_variant_attributes'

    product_variant_id: int
    attribute_value_id: int

    product_variant_id = db.Column(db.Integer(), ForeignKey('product_variants.id'), primary_key=True)
    attribute_value_id = db.Column(db.Integer, ForeignKey('product_attribute_values.id'), primary_key=True)

    def __init__(self, user_id, role_id):
        self.user_id = user_id
        self.role_id = role_id
