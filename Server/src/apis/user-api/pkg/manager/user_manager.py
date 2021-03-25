from .....models.entity import UserModel, PermissionModel, RolePermissionModel, RoleModel, UserRoleModel
from .....app import db


class UserManager:

    def build_user_query(self, opts):
        query = UserModel.query

        if 'id' in opts:
            query = query.filter_by(id=opts['id'])

        if 'password' in opts:
            query = query.filter_by(password=opts['password'])

        if 'email' in opts and opts['email'] is not None:
            query = query.filter(UserModel.email.like(f'{opts["email"]}%'))

        return query

    def build_permission_query(self, opts):
        query = PermissionModel.query

        if 'user_id' in opts:
            query = query.join(RolePermissionModel).join(RoleModel). \
                join(UserRoleModel). \
                filter(UserRoleModel.user_id == opts['user_id']). \
                filter(RoleModel.activate == True)

        return query

    def get_user(self, opts):
        query = self.build_user_query(opts)

        user = query.first()
        return user

    def fetch_user(self, opts):
        query = self.build_user_query(opts)
        if 'page' in opts:
            offset = (opts['page'] - 1) * opts['limit']
            query = query.offset(offset)

        if 'limit' in opts:
            query = query.limit(opts['limit'])

        user = query.all()
        return user

    def count_user(self, opts):
        query = self.build_user_query(opts)

        count = query.count()
        return count

    def create_user(self, user):
        db.session.add(user)
        return db.session.commit()

    def get_permissions(self, opts):
        query = self.build_permission_query(opts)

        permissions = query.all()
        return permissions
