from .....app import db

from .....models.entity import RoleModel, RolePermissionModel


class RoleManager:
    def build_role_query(self, opts):
        query = RoleModel.query

        if 'activate' in opts:
            query = query.filter(activate=opts['activate'])

        return query

    def fetch_roles(self, opts):
        query = self.build_role_query(opts)

        roles = query.all()
        return roles

    def create_role(self, data):
        session = db.session
        role = RoleModel(name=data['name'], description=data['description'])

        session.add(role)
        session.flush()

        role_permissions = []
        permissions = data['permissions']

        for permission in permissions:
            role_permission = RolePermissionModel(role_id=role.id, permission_id=permission)
            role_permissions.append(role_permission)

        session.add_all(role_permissions)
        session.commit()
        return role

    def update_role(self, data, role_id):
        session = db.session

        session.query(RoleModel).filter(RoleModel.id == role_id).update({
            RoleModel.name: data['name'],
            RoleModel.description: data['description'],
            RoleModel.activate: data['activate']
        })

        session.query(RolePermissionModel). \
            filter(RolePermissionModel.permission_id.in_(data['delete_permissions'])). \
            delete(synchronize_session='fetch')

        role_permissions = []
        permissions = data['update_permissions']

        for permission in permissions:
            role_permission = RolePermissionModel(role_id=role_id, permission_id=permission)
            role_permissions.append(role_permission)

        session.add_all(role_permissions)
        session.commit()
