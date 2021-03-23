from flask import Blueprint
from .handlers import fetch_permissison_handler, fetch_role_handler, create_role_handler, update_role_handler, \
    get_role_handler

api = Blueprint('Permission API', __name__)

routes = [
    dict(auth_required=True,
         # code='GET_PERMISSION',
         path='',
         view_func=fetch_permissison_handler,
         options=dict(methods=['GET'])),
    dict(auth_required=True,
         # code='GET_PERMISSION',
         path='/roles',
         view_func=fetch_role_handler,
         options=dict(methods=['GET'])),
    dict(auth_required=True,
         # code='GET_PERMISSION',
         path='/role',
         view_func=create_role_handler,
         options=dict(methods=['POST'])),
    dict(auth_required=True,
         # code='GET_PERMISSION',
         path='/roles/<role_id>',
         view_func=update_role_handler,
         options=dict(methods=['PUT'])),
    dict(auth_required=True,
         # code='GET_PERMISSION',
         path='/roles/<role_id>',
         view_func=get_role_handler,
         options=dict(methods=['GET']))
]
