import logging
from http import HTTPStatus
from ....toolkits import transhttp
from ....toolkits.constant import MESSAGE
from ..pkg.manager import product_manager


def get_product_handler(product_id):
    try:
        opts = {
            id:product_id
        }
        product, related_products = product_manager.get_product(opts)

        return transhttp.response_json({"product": product, "related_products": related_products})

    except Exception as e:
        logging.error(e)
        return transhttp.response_error(HTTPStatus.INTERNAL_SERVER_ERROR, MESSAGE['MESSAGE_SERVER_INTERNAL'])
