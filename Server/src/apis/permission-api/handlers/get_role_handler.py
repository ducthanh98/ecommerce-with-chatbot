from http import HTTPStatus

from flask import jsonify, request

from ....toolkits import transhttp
from ....toolkits.constant import MESSAGE
from ..pkg import role_manager


def get_role_handler(role_id):
    try:
        opts = {
            'id': role_id
        }
        role = role_manager.get_role(opts)
        if role is None:
            return transhttp.response_error(HTTPStatus.BAD_REQUEST, MESSAGE['NOT_FOUND'])

        return jsonify({"role": role})

    except Exception as e:
        print(e)
        return transhttp.response_error(HTTPStatus.INTERNAL_SERVER_ERROR, MESSAGE['MESSAGE_SERVER_INTERNAL'])
