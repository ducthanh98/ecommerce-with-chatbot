from flask import Blueprint
from .handlers import fetch_category_handler,create_category_handler,update_category_handler

api = Blueprint('Category API', __name__)

routes = [
    dict(auth_required=False,
         path='',
         view_func=fetch_category_handler,
         options=dict(methods=['GET'])),
    dict(auth_required=True,
         path='',
         view_func=create_category_handler,
         options=dict(methods=['POST'])),
    dict(auth_required=True,
         path='/<category_id>',
         view_func=update_category_handler,
         options=dict(methods=['PUT'])),
]
