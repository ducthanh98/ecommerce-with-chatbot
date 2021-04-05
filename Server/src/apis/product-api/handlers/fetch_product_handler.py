import logging
from http import HTTPStatus
from ....toolkits import transhttp
from flask import request
from ....toolkits.constant import MESSAGE

from ..pkg.manager import product_manager


def fetch_product_handler():
    try:
        products, count = product_manager.fetch_product(request.args)

        return transhttp.response_json({"products": products, "count": count})

    except Exception as e:
        logging.error(e)
        return transhttp.response_error(HTTPStatus.INTERNAL_SERVER_ERROR, MESSAGE['MESSAGE_SERVER_INTERNAL'])
