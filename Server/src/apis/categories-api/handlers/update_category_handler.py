from http import HTTPStatus

import jsonschema
from flask import jsonify, request

from ....toolkits import transhttp
from ..pkg.dto.update_category_form import update_category_schema
from ....toolkits.constant import MESSAGE
from ..pkg.manager import category_manager


def update_category_handler(category_id):
    try:
        data = request.get_json()
        jsonschema.validate(data, schema=update_category_schema, format_checker=jsonschema.FormatChecker())

        category_manager.update_category(data, category_id)

        return jsonify({"success": True})

    except jsonschema.exceptions.ValidationError as e:
        if 'message' not in e.schema:
            return transhttp.response_error(HTTPStatus.BAD_REQUEST, e.message)

        return transhttp.response_error(HTTPStatus.BAD_REQUEST, e.schema['message'])

    except Exception as e:
        print(e)
        return jsonify({"error": MESSAGE['MESSAGE_SERVER_INTERNAL']})
