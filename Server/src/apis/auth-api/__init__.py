from flask import Blueprint
from .handlers import login_handler

api = Blueprint('Auth API', __name__)

routes = [
    dict(path='/login', view_func=login_handler.serve_http, options=dict(methods=['POST']))
]
