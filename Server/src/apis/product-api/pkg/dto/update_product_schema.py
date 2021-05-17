update_product_schema = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
        "name": {
            "type": "string"
        },
        "description": {
            "type": "string"
        },
        "category_id": {
            "type": "integer"
        },
        "variants": {
            "type": "array",
            "items": [
                {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "integer"
                        },
                        "name": {
                            "type": "string"
                        },
                        "price": {
                            "type": "integer"
                        }
                    },
                    "required": [
                        "id",
                        "name",
                        "price"
                    ]
                }
            ]
        },
        "images": {
            "type": "array",
            "items": [
                {
                    "type": "string"
                }
            ]
        }
    },
    "required": [
        "name",
        "description",
        "category_id",
        "variants",
        "images"
    ]
}
