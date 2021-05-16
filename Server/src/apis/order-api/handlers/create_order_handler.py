from http import HTTPStatus
import jsonschema
from flask import request
import logging
from ....toolkits import transhttp
from ..pkg.dto.create_order_form import create_order_form
from ....toolkits.constant import MESSAGE
from ..pkg.manager import order_manager


def create_order_handler():
    try:
        data = request.get_json()
        jsonschema.validate(data, schema=create_order_form, format_checker=jsonschema.FormatChecker())
        data = request.get_json()
        jsonschema.validate(data, schema=create_order_form, format_checker=jsonschema.FormatChecker())
        order_manager.create_order(data,request.user_id)

        return transhttp.response_json({"success": True})

    except jsonschema.exceptions.ValidationError as e:
        if 'message' not in e.schema:
            return transhttp.response_error(HTTPStatus.BAD_REQUEST, e.message)

        return transhttp.response_error(HTTPStatus.BAD_REQUEST, e.schema['message'])

    except Exception as e:
        logging.error(e)
        return transhttp.response_error(HTTPStatus.INTERNAL_SERVER_ERROR, MESSAGE['MESSAGE_SERVER_INTERNAL'])
