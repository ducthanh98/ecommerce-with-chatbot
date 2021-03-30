from flask import Blueprint
from .handlers import get_current_user_info_handler, fetch_user_handler, update_user_handler,get_user_info_handler

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
    dict(auth_required=True,
         path='<user_id>',
         view_func=update_user_handler,
         options=dict(methods=['PUT'])),
    dict(auth_required=True,
         path='<user_id>',
         view_func=get_user_info_handler,
         options=dict(methods=['GET']))
]
