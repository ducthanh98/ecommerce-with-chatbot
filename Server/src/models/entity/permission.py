import time

from sqlalchemy import func
from dataclasses import dataclass
from ...app import db


@dataclass
class PermissionModel(db.Model):
    __tablename__ = 'permissions'
    id: int
    code: str
    description: str
    activate: bool

    id = db.Column(db.Integer, primary_key=True)
    code = db.Column(db.VARCHAR(50))
    description = db.Column(db.Text)
    activate = db.Column(db.Boolean)

    def __init__(self, code, description, activate=True):
        self.code = code
        self.description = description
        self.activate = activate
