import requests
from flask_cors import CORS
from flask import Flask, jsonify, send_file, request
from flask_marshmallow import Marshmallow
from flask_json_schema import JsonSchema
from jsonpickle import json

from .apis import server
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)

CORS(app, supports_credentials=True)
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


def extract():
    text = request.get_json()["text"]
    payload = json.dumps({text: text})
    headers = {'Content-Type': 'application/json'}
    response = requests.request("POST", url="localhost:5055/model/parse", headers=headers, payload=payload)
    return response.json()


@app.route('/images/<filename>')
def get_image(filename):
    path = f'{os.getenv("UPLOAD_FOLDER")}'
    return send_file(os.path.join('../' + path, filename))
