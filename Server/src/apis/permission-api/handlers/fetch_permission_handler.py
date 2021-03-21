from http import HTTPStatus

from flask import jsonify

from ..pkg import permission_manager


def fetch_permissison_handler():
    permissions = permission_manager.fetch_permissions()

    return jsonify({"permissions": permissions})
