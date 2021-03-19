from ..toolkits.app import router
from ..toolkits.constant import url_prefix


def get_list_routers(prefix='/'):
    return [
        ('src.apis.auth-api', f'{prefix}/auth-api'),
        ('src.apis.user-api', f'{prefix}/user-api'),
    ]


def register(app):
    modules = get_list_routers(url_prefix.URL_PREFIX)
    router.register_blueprint(app, modules)
