from http import HTTPStatus
import jsonschema
from flask import jsonify, request
from ....toolkits import transhttp
from ..pkg.dto.create_category_form import create_category_schema
from ....toolkits.constant import MESSAGE
from ..pkg.manager import category_manager


def create_category_handler():
    try:
        data = request.get_json()
        jsonschema.validate(data, schema=create_category_schema, format_checker=jsonschema.FormatChecker())

        category_manager.create_category(data)

        return jsonify({"success": True})

    except jsonschema.exceptions.ValidationError as e:
        if 'message' not in e.schema:
            return transhttp.response_error(HTTPStatus.BAD_REQUEST, e.message)

        return transhttp.response_error(HTTPStatus.BAD_REQUEST, e.schema['message'])

    except Exception as e:
        print(e)
        return transhttp.response_error(HTTPStatus.INTERNAL_SERVER_ERROR, MESSAGE['MESSAGE_SERVER_INTERNAL'])
