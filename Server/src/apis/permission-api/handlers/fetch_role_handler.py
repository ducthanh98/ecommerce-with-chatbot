from http import HTTPStatus
from flask import request
from ....toolkits.constant import MESSAGE
from ....toolkits import transhttp
from ..pkg import role_manager


def fetch_role_handler():
    try:
        opts = {}
        if request.args.get('activate') is not None:
            opts['activate'] = request.args.get('activate')

        roles = role_manager.fetch_roles(opts)

        return transhttp.response_json({"roles": roles})
    except Exception as e:
        print(e)
        return transhttp.response_error(HTTPStatus.INTERNAL_SERVER_ERROR, MESSAGE['MESSAGE_SERVER_INTERNAL'])
