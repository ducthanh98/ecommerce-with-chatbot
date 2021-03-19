from flask import Blueprint
from .handlers import get_current_user_info_handler

api = Blueprint('User API', __name__)

routes = [
    dict(auth_required=True, code='GET_USER', path='/current', view_func=get_current_user_info_handler,
         options=dict(methods=['POST'])),
]
