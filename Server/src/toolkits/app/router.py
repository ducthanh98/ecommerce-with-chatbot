from importlib import import_module


def register_blueprint(app, modules):
    for folder, prefix in modules:
        m = import_module(folder)
        if hasattr(m, 'api') & hasattr(m, 'routes'):
            bp = getattr(m, 'api')
            routes = getattr(m, 'routes')

            register_router(bp,routes)

            if prefix.strip() == '/':
                # no prefix
                app.register_blueprint(bp)
            else:
                app.register_blueprint(bp, url_prefix=prefix)


def register_router(blue_print, routes):
    for r in routes:
        blue_print.add_url_rule(
            r['path'],
            endpoint=r.get('endpoint', None),
            view_func=r['view_func'],
            **r.get('options', {}))
