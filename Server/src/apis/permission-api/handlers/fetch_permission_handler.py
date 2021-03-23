from http import HTTPStatus

from flask import jsonify

from ....toolkits.constant import MESSAGE
from ..pkg import permission_manager


def fetch_permissison_handler():
    try:
        permissions = permission_manager.fetch_permissions()

        return jsonify({"permissions": permissions})

    except Exception as e:
        print(e)
        return jsonify({"error": MESSAGE['MESSAGE_SERVER_INTERNAL']})
