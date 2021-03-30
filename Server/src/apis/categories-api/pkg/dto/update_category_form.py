update_category_schema = {
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "minLength": 1,
            "message": "name is invalid",
        },
        "description": {
            "type": "string",
            "description": "name is invalid",
        },
        "activate": {
            "type": "boolean",
            "description": "activate is invalid",
        },
        "image": {
            "type": "string",
            "minLength": 1,
            "description": "image is invalid",
        },
    },
    "required": ["name", "image"]

}
