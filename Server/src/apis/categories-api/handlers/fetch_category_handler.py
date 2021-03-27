from http import HTTPStatus
from ....toolkits import transhttp
from flask import jsonify, request
from ....toolkits.constant import MESSAGE

from ..pkg.manager import category_manager


def fetch_category_handler():
    try:
        categories = category_manager.fetch_category(request.args)

        return transhttp.response_json({"categories": categories})

    except Exception as e:
        print(e)
        return transhttp.response_error(HTTPStatus.INTERNAL_SERVER_ERROR, MESSAGE['MESSAGE_SERVER_INTERNAL'])
