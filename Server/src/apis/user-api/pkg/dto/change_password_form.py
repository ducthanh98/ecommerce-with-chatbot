change_password_schema = {
    "type": "object",
    "properties": {
        "password": {
            "type": "string",
            "minLength": 6,
            "maxLength": 255,
            "message": "password must be at least 6 character"
        }
    },
    "required": ["password"]
}
