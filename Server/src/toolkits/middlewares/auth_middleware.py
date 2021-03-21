import os
from functools import wraps
from http import HTTPStatus

from flask import jsonify
import jwt
from flask import request

from .. import transhttp
from ..constant import MESSAGE


def auth_middleware(func, code):
    @wraps(func)
    def decorated_func(*args, **kwargs):
        try:
            has_permission = True
            token = request.cookies.get('token')

            key = os.getenv('SECRET_KEY')
            decoded = jwt.decode(token, key=key, algorithms='HS256')
            permissions = decoded['sub']['permissions']
            request.user_id = decoded['sub']['user_id']

            if code is not None:
                has_permission = False
                for permission in permissions:
                    if permission == code:
                        has_permission = True
                        break

            if has_permission:
                return func(*args, **kwargs)
            else:
                return transhttp.response_error(HTTPStatus.FORBIDDEN, MESSAGE['PERMISSION_DENIED'])

        except jwt.ExpiredSignatureError:
            return transhttp.response_error(HTTPStatus.UNAUTHORIZED, MESSAGE['TOKEN_EXPIRED'])
        except jwt.InvalidTokenError:
            return transhttp.response_error(HTTPStatus.UNAUTHORIZED, MESSAGE['TOKEN_INVALID'])
        except Exception as e:
            print(e)
            return jsonify({"error": MESSAGE['MESSAGE_SERVER_INTERNAL']})

    return decorated_func
