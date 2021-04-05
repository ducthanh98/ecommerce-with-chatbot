from http import HTTPStatus

from flask import request

from ....toolkits.constant import MESSAGE
from ..pkg.manager import user_manager
from ....toolkits import transhttp


def fetch_user_handler():
    try:
        opts = {
            'page': int(request.args.get('page')),
            'limit': int(request.args.get('limit')),
            'email': request.args.get('email')
        }
        users = user_manager.fetch_user(opts)
        count = user_manager.count_user(opts)

        return transhttp.response_json({"users": users, "count": count})
    except Exception as e:
        print(e)
        return transhttp.response_error(HTTPStatus.INTERNAL_SERVER_ERROR, MESSAGE['MESSAGE_SERVER_INTERNAL'])


