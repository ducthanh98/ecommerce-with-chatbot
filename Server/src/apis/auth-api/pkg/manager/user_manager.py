from .....models.entity import UserModel, PermissionModel, RolePermissionModel, RoleModel, UserRoleModel
from .....app import db

from dataclasses import is_dataclass


class UserManager:

    def build_user_query(self, opts):
        query = UserModel.query

        if 'id' in opts:
            query = query.filter_by(id=opts['id'])

        if 'password' in opts:
            query = query.filter_by(password=opts['password'])

        if 'email' in opts:
            query = query.filter_by(email=opts['email'])

        return query

    def build_permission_query(self, opts):
        query = PermissionModel.query

        if 'user_id' in opts:
            query = query.join(RolePermissionModel).join(RoleModel). \
                join(UserRoleModel). \
                filter(UserRoleModel.user_id == opts['user_id']). \
                filter(RoleModel.activate == True). \
                filter(PermissionModel.activate == True)

        return query

    def get_user(self, opts):
        query = self.build_user_query(opts)

        user = query.first()
        return user


    def create_user(self, user):
        db.session.add(user)
        return db.session.commit()


    def get_permissions(self, opts):
        query = self.build_permission_query(opts)

        permissions = query.all()
        return permissions
