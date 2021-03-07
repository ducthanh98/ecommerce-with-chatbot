from flask import Blueprint
from .handlers import *

api = Blueprint('Auth API', __name__)

routes = [
    dict(path='/login', view_func=login_handler, options=dict(methods=['POST'])),
    dict(path='/register', view_func=register_handler, options=dict(methods=['POST'])),
]
