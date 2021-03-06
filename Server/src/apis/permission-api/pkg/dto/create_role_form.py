create_role_schema = {
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "minLength": 1,
            "message": "name is invalid",
        },
        "description": {
            "type": "string",
        },
        "update_permissions": {
            "type": "array",
            "items": {
                "type": "number"
            },
            "message": "permission is invalid"
        }
    },
    "required": ["name", "update_permissions"]

}
