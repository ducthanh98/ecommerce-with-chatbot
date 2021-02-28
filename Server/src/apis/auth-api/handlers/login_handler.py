from flask import jsonify


def serve_http():
    return jsonify({'msg': 'login'})
