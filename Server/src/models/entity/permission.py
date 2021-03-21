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

    id = db.Column(db.Integer, primary_key=True, autoincrement=True, )
    code = db.Column(db.VARCHAR(50))
    description = db.Column(db.Text)

    def __init__(self, code, description, activate=True):
        self.code = code
        self.description = description
