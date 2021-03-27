update_user_schema = {
    "type": "object",
    "properties": {
        "update_roles": {
            "type": "array",
            "items": {
                "type": "number"
            },
            "message": "permission is invalid"
        },
        "delete_roles": {
            "type": "array",
            "items": {
                "type": "number"
            },
            "message": "permission is invalid"
        },
    },
    "required": ["delete_roles", "update_roles"]

}
