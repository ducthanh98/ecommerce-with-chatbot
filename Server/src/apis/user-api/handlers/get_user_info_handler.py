from http import HTTPStatus
import jsonschema
from ..pkg.manager import user_manager
from ....toolkits import transhttp
from ....toolkits.constant import MESSAGE


def get_user_info_handler(user_id):
    try:

        opts = {
            'user_id': user_id
        }
        user_model = user_manager.get_user(opts)
        if user_model is None:
            return transhttp.response_error(HTTPStatus.NOT_FOUND, "User not found")

        return transhttp.response_json({"user": user_model})
    except jsonschema.exceptions.ValidationError as e:
        if 'message' not in e.schema:
            return transhttp.response_error(HTTPStatus.BAD_REQUEST, e.message)

        return transhttp.response_error(HTTPStatus.BAD_REQUEST, e.schema['message'])

    except Exception as e:
        print(e)
        return transhttp.response_error(HTTPStatus.INTERNAL_SERVER_ERROR, MESSAGE['MESSAGE_SERVER_INTERNAL'])
