from http import HTTPStatus

from flask import jsonify, request
from ....toolkits.constant import MESSAGE

from ..pkg import role_manager


def fetch_role_handler():
    try:
        opts = {}
        if request.args.get('activate') is not None:
            opts['activate'] = request.args.get('activate')

        roles = role_manager.fetch_roles(opts)

        return jsonify({"roles": roles})

    except Exception as e:
        print(e)
        return jsonify({"error": MESSAGE['MESSAGE_SERVER_INTERNAL']})
