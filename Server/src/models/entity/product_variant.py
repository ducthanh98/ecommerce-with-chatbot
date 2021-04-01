import datetime
from dataclasses import dataclass
from .role_permission import RolePermissionModel
from typing import List
from sqlalchemy import func

from ...app import db


@dataclass
class ProductVariantModel(db.Model):
    __tablename__ = 'product_variants'

    id: int
    name: str
    description: str
    activate: bool
    created_at: datetime
    updated_at: datetime
    role_permissions: List[RolePermissionModel]

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.VARCHAR(50))
    description = db.Column(db.Text)
    activate = db.Column(db.Boolean)
    created_at = db.Column(db.TIMESTAMP(), default=func.now())
    updated_at = db.Column(db.TIMESTAMP(), onupdate=func.now(), default=func.now())
    role_permissions = db.relationship('RolePermissionModel', lazy=True)

    def __init__(self, name, description, activate=True):
        self.name = name
        self.description = description
        self.activate = activate
