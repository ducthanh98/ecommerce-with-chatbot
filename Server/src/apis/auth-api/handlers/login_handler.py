from flask import jsonify, request
from ..pkg.manager import user_manager

from ..pkg.dto.user_dto import UserDTO
from ....toolkits.app import generate_auth_token


def serve_http():
    try:
        data = request.get_json()
        user_model = user_manager.get_user(data['email'], data['password'])
        user_dto = UserDTO()
        user = user_dto.dump(user_model)

        token = generate_auth_token(user["id"])

        return jsonify({"token": token, "user": user})

    except Exception as e:
        return e
