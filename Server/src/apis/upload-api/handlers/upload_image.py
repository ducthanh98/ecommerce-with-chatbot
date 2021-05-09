import os
from http import HTTPStatus
from uuid import uuid4
from ....toolkits.constant import MESSAGE
from ....toolkits import transhttp

from flask import request



def handle_upload_images():
    try:
        files = request.files.getlist("file")
        path = os.getenv('UPLOAD_FOLDER')
        filenames = []
        for file in files:
            filename = f'{uuid4()}{file.filename.replace(" ","")}'
            file.save(os.path.join(path, filename))
            filenames.append(filename)

        return transhttp.response_json({"filenames": filenames})
    except Exception as e:
        print(e)
        return transhttp.response_error(HTTPStatus.INTERNAL_SERVER_ERROR, MESSAGE['MESSAGE_SERVER_INTERNAL'])
