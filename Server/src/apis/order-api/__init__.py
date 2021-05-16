from flask import Blueprint
from .handlers import create_order_handler

api = Blueprint('Order API', __name__)

routes = [
    dict(auth_required=True,
         path='',
         view_func=create_order_handler,
         options=dict(methods=['POST']))
]
