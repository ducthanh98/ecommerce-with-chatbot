import os
from http import HTTPStatus

import jsonschema
from flask import jsonify, request

from ..pkg.manager import user_manager
from ....toolkits import transhttp
from ..pkg.dto.login_form import UserDTO, login_form_schema, PermissionDTO
from ....toolkits.app import generate_auth_token
from ....toolkits.constant import MESSAGE


def login_handler():
    try:
        data = request.get_json()
        jsonschema.validate(data, schema=login_form_schema, format_checker=jsonschema.FormatChecker())
        username = request.cookies.get('token')
        opts = {
            'email': data['email'],
            'password': data['password']
        }

        user_model = user_manager.get_user(opts)
        if user_model is None:
            return transhttp.response_error(HTTPStatus.BAD_REQUEST, "Email or Password are incorrect")

        user_dto = UserDTO()
        user = user_dto.dump(user_model)

        opts = {
            'user_id': user['id']
        }

        permissions_model = user_manager.get_permissions(opts)
        if permissions_model is None:
            return transhttp.response_error(HTTPStatus.BAD_REQUEST, "Email or Password are incorrect")

        permission_dto = PermissionDTO()
        permission = permission_dto.dump(permissions_model)

        token = generate_auth_token(user["id"])

        out = jsonify({"user_info": user, "logged_in": True})
        days = os.getenv('TOKEN_DAY_EXPIRED')
        days = int(days)
        out.set_cookie('token', token, max_age=days * 24 * 60 * 60, httponly=True, samesite='Lax')

        return out
    except jsonschema.exceptions.ValidationError as e:
        if 'message' not in e.schema:
            return transhttp.response_error(HTTPStatus.BAD_REQUEST, e.message)

        return transhttp.response_error(HTTPStatus.BAD_REQUEST, e.schema['message'])
    except Exception as e:
        print(e)
        return jsonify({"error": MESSAGE['MESSAGE_SERVER_INTERNAL']})
