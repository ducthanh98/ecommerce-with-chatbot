import os

from src.toolkits.config import config
from src.app import app

import atexit

config.load_config()

# Run Server
if __name__ == '__main__':
    debug = os.getenv('DEBUG', True)
    app.run(debug=debug)


def exit_handler():
    print('Service is terminated !!!')


atexit.register(exit_handler)
