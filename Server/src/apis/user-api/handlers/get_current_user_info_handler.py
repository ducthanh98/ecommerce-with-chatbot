from flask import jsonify


def get_current_user_info_handler():
    return jsonify({'msg': 'hello'})
