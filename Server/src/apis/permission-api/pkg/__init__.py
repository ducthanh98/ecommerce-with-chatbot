from .manager.user_manager import UserManager
from .manager.permission_manager import PermissionManager
from .manager.role_manager import RoleManager

user_manager = UserManager()
permission_manager = PermissionManager()
role_manager = RoleManager()

__all__ = ["user_manager", "permission_manager", "role_manager"]
