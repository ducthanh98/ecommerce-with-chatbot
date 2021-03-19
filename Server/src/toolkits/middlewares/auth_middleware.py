import os
from functools import wraps
from http import HTTPStatus

from flask import jsonify
import jwt
from flask import request, Response

from .. import transhttp
from ..constant import MESSAGE


def auth_middleware(func, code):
    @wraps(func)
    def decorated_func(*args, **kwargs):
        try:
            token = request.cookies.get('token')

            key = os.getenv('SECRET_KEY')
            decoded = jwt.decode(token, key=key, algorithms='HS256')

            return func(*args, **kwargs)
        except jwt.ExpiredSignatureError:
            return transhttp.response_error(HTTPStatus.UNAUTHORIZED, MESSAGE['PERMISSION_DENIED'])

    return decorated_func
