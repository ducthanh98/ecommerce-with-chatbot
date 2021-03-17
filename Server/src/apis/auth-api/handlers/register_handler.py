from flask import jsonify, request
from ..pkg.manager import user_manager
from http import HTTPStatus
from ..pkg.dto.register_form import register_form_schema
from ....toolkits import transhttp
from ....toolkits.constant import MESSAGE
from ....models.entity import UserModel
import jsonschema


def register_handler():
    try:
        data = request.get_json()
        jsonschema.validate(data, schema=register_form_schema, format_checker=jsonschema.FormatChecker())

        opt = {
            'email': data['email']
        }
        user_model = user_manager.get_user(opt)
        if user_model is not None:
            return transhttp.response_error(HTTPStatus.BAD_REQUEST, "Email has already exist")

        user_model = UserModel(email=data['email'], password=data['password'], fullname=data['fullname'])
        user_manager.create_user(user_model)

        return jsonify({"success": True})

    except jsonschema.exceptions.ValidationError as e:
        if 'message' not in e.schema:
            return transhttp.response_error(HTTPStatus.BAD_REQUEST, e.message)

        return transhttp.response_error(HTTPStatus.BAD_REQUEST, e.schema['message'])
    except Exception:
        return jsonify({"error": MESSAGE['MESSAGE_SERVER_INTERNAL']})
