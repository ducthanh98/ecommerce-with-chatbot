from http import HTTPStatus

import jsonschema
from flask import jsonify, request

from ....toolkits import transhttp
from ..pkg.dto.update_user_form import update_user_schema
from ....toolkits.constant import MESSAGE
from ..pkg import user_manager


def update_user_handler(user_id):
    try:
        data = request.get_json()
        jsonschema.validate(data, schema=update_user_schema, format_checker=jsonschema.FormatChecker())

        user_manager.update_role(data, user_id)

        return jsonify({"success": True})

    except jsonschema.exceptions.ValidationError as e:
        if 'message' not in e.schema:
            return transhttp.response_error(HTTPStatus.BAD_REQUEST, e.message)

        return transhttp.response_error(HTTPStatus.BAD_REQUEST, e.schema['message'])

    except Exception as e:
        print(e)
        return jsonify({"error": MESSAGE['MESSAGE_SERVER_INTERNAL']})
