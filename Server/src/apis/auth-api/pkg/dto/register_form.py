register_form_schema = {
    "type": "object",
    "properties": {
        "email": {"type": "string", "format": "email"},
        "password": {
            "type": "string",
            "minLength": 6,
            "maxLength": 50,
            "message": "Fullname required"
        },
        "fullname": {
            "type": "string",
            "minLength": 6,
            "message": "Fullname required"
        }
    },
    "required": ["email", "password", "fullname"]

}
