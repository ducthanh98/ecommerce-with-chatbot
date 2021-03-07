from flask_cors import CORS
from flask import Flask, jsonify
from flask_marshmallow import Marshmallow
from flask_json_schema import JsonSchema

from .apis import server
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)
CORS(app)
schema = JsonSchema(app)

app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URI')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = os.getenv('DATABASE_DEBUG') == 'True'

db = SQLAlchemy(app)
ma = Marshmallow(app)

server.register(app)


@app.route('/', methods=['GET'])
def init():
    return jsonify({'msg': 'hello'})


