update_role_schema = {
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "minLength": 1,
            "message": "name is invalid",
        },
        "description": {
            "type": "string",
            "message": "description is invalid"
        },
        "activate": {
            "type": "boolean",
            "message": "activate is invalid"
        },
        "update_permissions": {
            "type": "array",
            "items": {
                "type": "number"
            },
            "message": "permission is invalid"
        },
        "delete_permissions": {
            "type": "array",
            "items": {
                "type": "number"
            },
            "message": "permission is invalid"
        },
    },
    "required": ["name", "delete_permissions", "update_permissions"]

}
