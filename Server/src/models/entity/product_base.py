import datetime
from dataclasses import dataclass
from .role_permission import RolePermissionModel
from typing import List
from sqlalchemy import func

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

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.VARCHAR(50))
    description = db.Column(db.Text)
    activate = db.Column(db.Boolean)
    images = db.Column(db.ARRAY(db.VARCHAR(50)))
    created_at = db.Column(db.TIMESTAMP(), default=func.now())
    updated_at = db.Column(db.TIMESTAMP(), onupdate=func.now(), default=func.now())

    def __init__(self, name, description, activate=True):
        self.name = name
        self.description = description
        self.activate = activate
