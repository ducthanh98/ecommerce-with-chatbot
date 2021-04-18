update_user_schema = {
    "type": "object",
    "properties": {
        "activate": {
            "type": "boolean",
            "message": "activate is invalid"
        },
        "update_roles": {
            "type": "array",
            "items": {
                "type": "number"
            },
            "message": "roles is invalid"
        },
    },
    "required": ["update_roles"]

}
