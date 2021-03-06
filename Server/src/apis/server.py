from ..toolkits.app import router
from ..toolkits.constant import url_prefix


def get_list_routers(prefix='/'):
    return [
        ('src.apis.auth-api', f'{prefix}/auth-api'),
        ('src.apis.order-api', f'{prefix}/order-api'),
        ('src.apis.user-api', f'{prefix}/user-api'),
        ('src.apis.permission-api', f'{prefix}/permission-api'),
        ('src.apis.categories-api', f'{prefix}/category-api'),
        ('src.apis.upload-api', f'{prefix}/upload-api'),
        ('src.apis.product-api', f'{prefix}/product-api'),
    ]


def register(app):
    modules = get_list_routers(url_prefix.URL_PREFIX)
    router.register_blueprint(app, modules)
