from flask import Blueprint

from .handlers import create_product_handler, fetch_product_handler

api = Blueprint('Product API', __name__)

routes = [
    dict(auth_required=False,
         path='',
         view_func=fetch_product_handler,
         options=dict(methods=['GET'])),
    dict(auth_required=True,
         path='',
         view_func=create_product_handler,
         options=dict(methods=['POST'])),

]
