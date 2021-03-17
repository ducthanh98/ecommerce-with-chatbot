register_form_schema = {
    "type": "object",
    "properties": {
        "email": {
            "type": "string",
            "format": "email",
            "messages": "email is invalid",
        },
        "password": {
            "type": "string",
            "minLength": 6,
            "maxLength": 255,
            "message": "password must be at least 6 character"
        },
        "fullname": {
            "type": "string",
            "minLength": 1,
            "message": "fullname must be not empty"
        }
    },
    "required": ["email", "password", "fullname"]

}
