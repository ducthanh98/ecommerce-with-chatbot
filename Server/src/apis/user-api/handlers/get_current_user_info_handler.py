from http import HTTPStatus

from flask import jsonify, request

from ..pkg.manager import user_manager
from ....toolkits import transhttp


def get_current_user_info_handler():
    opts = {
        'user_id': request.user_id
    }
    user_model = user_manager.get_user(opts)
    if user_model is None:
        return transhttp.response_error(HTTPStatus.NOT_FOUND, "User not found")

    permissions = []
    permissions_model = user_manager.get_permissions(opts)
    if permissions_model is not None:

        for permission in permissions_model:
            permissions.append(permission.code)

    return jsonify({"user_info": user_model, "permissions": permissions})
