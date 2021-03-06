from dataclasses import dataclass

from sqlalchemy import func, ForeignKey

from ...app import db


@dataclass
class UserRoleModel(db.Model):
    __tablename__ = 'user_roles'
    user_id: int
    role_id: int

    role_id = db.Column(db.Integer(), ForeignKey('roles.id'), primary_key=True)
    user_id = db.Column(db.Integer, ForeignKey('users.id'), primary_key=True)

    def __init__(self, user_id, role_id):
        self.user_id = user_id
        self.role_id = role_id
