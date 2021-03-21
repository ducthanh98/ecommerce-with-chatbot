from dataclasses import dataclass

from ...app import db


@dataclass
class RoleModel(db.Model):
    __tablename__ = 'roles'

    id: int
    name: str
    description: str
    activate: bool

    id = db.Column(db.Integer, primary_key=True, autoincrement=True )
    name = db.Column(db.VARCHAR(50))
    description = db.Column(db.Text)
    activate = db.Column(db.Boolean)

    def __init__(self, name, description, activate=True):
        self.name = name
        self.description = description
        self.activate = activate
