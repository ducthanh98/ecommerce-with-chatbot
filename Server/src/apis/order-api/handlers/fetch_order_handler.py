import logging
from http import HTTPStatus
from ....toolkits import transhttp
from flask import request
from ....toolkits.constant import MESSAGE

from ..pkg.manager import order_manager


def fetch_order_handler():
    try:
        orders, count = order_manager.fetch_orders(request.args)

        return transhttp.response_json({"orders": orders, "count": count})

    except Exception as e:
        logging.error(e)
        return transhttp.response_error(HTTPStatus.INTERNAL_SERVER_ERROR, MESSAGE['MESSAGE_SERVER_INTERNAL'])
