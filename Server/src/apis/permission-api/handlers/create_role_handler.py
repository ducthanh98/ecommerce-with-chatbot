from http import HTTPStatus

import jsonschema
from flask import jsonify, request

from ....toolkits import transhttp
from ..pkg.dto.create_role_form import create_role_schema
from ....toolkits.constant import MESSAGE
from ..pkg import role_manager


def create_role_handler():
    try:
        data = request.get_json()
        jsonschema.validate(data, schema=create_role_schema, format_checker=jsonschema.FormatChecker())

        role_manager.create_role(data)

        return jsonify({"success": True})

    except jsonschema.exceptions.ValidationError as e:
        if 'message' not in e.schema:
            return transhttp.response_error(HTTPStatus.BAD_REQUEST, e.message)

        return transhttp.response_error(HTTPStatus.BAD_REQUEST, e.schema['message'])

    except Exception as e:
        print(e)
        return jsonify({"error": MESSAGE['MESSAGE_SERVER_INTERNAL']})
