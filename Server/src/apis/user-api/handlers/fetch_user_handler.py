from http import HTTPStatus

from flask import jsonify, request

from ..pkg.manager import user_manager
from ....toolkits import transhttp


def fetch_user_handler():
    opts = {
        'page': int(request.args.get('page')),
        'limit': int(request.args.get('limit')),
        'email': request.args.get('email')
    }
    users = user_manager.fetch_user(opts)
    count = user_manager.count_user(opts)

    return jsonify({"users": users, "count": count})
