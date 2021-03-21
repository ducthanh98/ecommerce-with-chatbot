from .....models.entity import PermissionModel


class PermissionManager:

    def fetch_permissions(self):
        permissions = PermissionModel.query.all()
        return permissions

