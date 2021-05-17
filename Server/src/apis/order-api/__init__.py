from flask import Blueprint
from .handlers import create_order_handler, fetch_order_handler,update_order_handler

api = Blueprint('Order API', __name__)

routes = [
    dict(auth_required=True,
         path='',
         view_func=create_order_handler,
         options=dict(methods=['POST'])),
    dict(auth_required=True,
         path='/<order_id>',
         view_func=update_order_handler,
         options=dict(methods=['PUT'])),
    dict(auth_required=True,
         path='',
         view_func=fetch_order_handler,
         options=dict(methods=['GET']))
]
