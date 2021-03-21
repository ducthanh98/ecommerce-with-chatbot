from flask import Blueprint
from .handlers import get_current_user_info_handler,fetch_user_handler

api = Blueprint('User API', __name__)

routes = [
    dict(auth_required=True,
         path='/current',
         view_func=get_current_user_info_handler,
         options=dict(methods=['GET'])),
    dict(auth_required=True,
         path='',
         view_func=fetch_user_handler,
         options=dict(methods=['GET'])),
]
