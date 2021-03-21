import time

from sqlalchemy import func, ForeignKey

from ...app import db


class RolePermissionModel(db.Model):
    __tablename__ = 'role_permissions'

    role_id: int
    permission_id: int

    role_id = db.Column(db.Integer(), ForeignKey('roles.id'), primary_key=True)
    permission_id = db.Column(db.Integer, ForeignKey('permissions.id'), primary_key=True)

    def __init__(self, role_id, permission_id):
        self.role_id = role_id
        self.permission_id = permission_id
