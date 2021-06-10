from http import HTTPStatus

import jsonschema
from flask import jsonify, request

from ....toolkits import transhttp
from ....toolkits.constant import MESSAGE
from ..pkg.dto.change_password_form import change_password_schema

from ..pkg import user_manager


def change_password_handler():
    try:
        data = request.get_json()
        jsonschema.validate(data, schema=change_password_schema, format_checker=jsonschema.FormatChecker())

        user_manager.update_password(data, request.user_id)

        return jsonify({"success": True})

    except jsonschema.exceptions.ValidationError as e:
        if 'message' not in e.schema:
            return transhttp.response_error(HTTPStatus.BAD_REQUEST, e.message)

        return transhttp.response_error(HTTPStatus.BAD_REQUEST, e.schema['message'])

    except Exception as e:
        print(e)
        return jsonify({"error": MESSAGE['MESSAGE_SERVER_INTERNAL']})
