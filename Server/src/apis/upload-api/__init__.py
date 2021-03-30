from flask import Blueprint
from .handlers import handle_upload_images

api = Blueprint('Upload API', __name__)

routes = [
    dict(auth_required=True,
         path='',
         view_func=handle_upload_images,
         options=dict(methods=['POST'])),
]
