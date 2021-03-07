from flask import jsonify, request


def response_json(status_code, body):
    return jsonify(body), status_code


def response_error(status_code, message):
    return jsonify({'error': message}), status_code
