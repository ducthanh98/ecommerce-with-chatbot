from http import HTTPStatus

import jsonschema
from flask import jsonify, request

from ..pkg.manager import user_manager
from ....toolkits import transhttp
from ..pkg.dto.login_form import UserDTO,login_form_schema
from ....toolkits.app import generate_auth_token
from ....toolkits.constant import MESSAGE


def login_handler():
    try:
        data = request.get_json()
        jsonschema.validate(data, schema=login_form_schema, format_checker=jsonschema.FormatChecker())

        opts = {
            'email': data['email'],
            'password': data['password']
        }

        user_model = user_manager.get_user(opts)
        user_dto = UserDTO()
        user = user_dto.dump(user_model)

        token = generate_auth_token(user["id"])

        return jsonify({"token": token, "user": user})
    except jsonschema.exceptions.ValidationError as e:
        return transhttp.response_error(HTTPStatus.BAD_REQUEST, str(e.message))
    except Exception as e:
        return jsonify({"error": MESSAGE['MESSAGE_SERVER_INTERNAL']})
