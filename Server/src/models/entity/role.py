import time

from sqlalchemy import func

from ...app import db


class RoleModel(db.Model):
    __tablename__ = 'roles'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.VARCHAR(50))
    description = db.Column(db.Text)
    activate = db.Column(db.Boolean)

    def __init__(self, name, description, activate):
        self.name = name
        self.description = description
        self.activate = activate
