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
