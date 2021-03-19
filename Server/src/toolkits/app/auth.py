import datetime

import jwt
import os


def generate_auth_token(user_id):
    days = os.getenv('TOKEN_DAY_EXPIRED')
    days = int(days)
    payload = {
        'exp': datetime.datetime.utcnow() + datetime.timedelta(days=days),
        'iat': datetime.datetime.utcnow(),
        'sub': user_id
    }
    return jwt.encode(
        payload,
        os.getenv('SECRET_KEY'),
        algorithm='HS256'
    )


