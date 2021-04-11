from flask import jsonify
from http import HTTPStatus


def response_json(body, status_code=HTTPStatus.OK):
    return jsonify(body), status_code


def response_error(status_code, message):
    return jsonify({'error': message}), status_code
