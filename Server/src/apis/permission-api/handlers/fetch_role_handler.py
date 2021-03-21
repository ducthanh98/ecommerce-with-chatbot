from http import HTTPStatus

from flask import jsonify, request

from ..pkg import role_manager


def fetch_role_handler():
    opts = {}
    if request.args.get('activate') is not None:
        opts['activate'] = request.args.get('activate')

    roles = role_manager.fetch_roles(opts)

    return jsonify({"roles": roles})
