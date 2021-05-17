from http import HTTPStatus
import jsonschema
from flask import request
import logging
from ....toolkits import transhttp
from ..pkg.dto.update_product_schema import update_product_schema
from ....toolkits.constant import MESSAGE
from ..pkg.manager import product_manager


def update_product_handler(product_id):
    try:
        data = request.get_json()
        jsonschema.validate(data, schema=update_product_schema, format_checker=jsonschema.FormatChecker())


        product_manager.update_product(data,product_id)

        return transhttp.response_json({"success": True})

    except jsonschema.exceptions.ValidationError as e:
        if 'message' not in e.schema:
            return transhttp.response_error(HTTPStatus.BAD_REQUEST, e.message)

        return transhttp.response_error(HTTPStatus.BAD_REQUEST, e.schema['message'])

    except Exception as e:
        logging.error(e)
        return transhttp.response_error(HTTPStatus.INTERNAL_SERVER_ERROR, MESSAGE['MESSAGE_SERVER_INTERNAL'])
