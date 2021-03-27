from flask import Blueprint
from .handlers import fetch_category_handler

api = Blueprint('Category API', __name__)

routes = [
    dict(auth_required=True,
         path='',
         view_func=fetch_category_handler,
         options=dict(methods=['GET'])),
]
