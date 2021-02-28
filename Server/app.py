import os

from src.toolkits.config import config
from src.apis import server
from flask_cors import CORS
from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
import atexit

config.load_config()

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URI')
db = SQLAlchemy(app)

server.register(app)


@app.route('/', methods=['GET'])
def init():
    return jsonify({'msg': 'hello'})


# Run Server
if __name__ == '__main__':
    debug = os.getenv('DEBUG', True)
    app.run(debug=debug)


def exit_handler():
    print('Service is terminated !!!')


atexit.register(exit_handler)
