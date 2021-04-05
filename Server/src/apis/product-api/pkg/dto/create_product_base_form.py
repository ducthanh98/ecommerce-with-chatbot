create_product_schema = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "message": "product name is invalid"
        },
        "description": {
            "type": "string",
            "message": "description is invalid"
        },
        "category_id": {
            "type": "integer",
            "message": "category is invalid"
        },
        "images": {
            "type": "array",
            "items": [
                {
                    "type": "string"
                },
            ],
            "message": "images is invalid"
        },
        "attributes": {
            "type": "array",
            "message": "attribute is invalid",
            "items": [
                {
                    "type": "object",
                    "properties": {
                        "key": {
                            "type": "integer"
                        },
                        "name": {
                            "type": "string"
                        },
                        "attribute": {
                            "type": "string",
                            "message": "attributes name is invalid"
                        },
                        "values": {
                            "type": "array",
                            "items": [
                                {
                                    "type": "string"
                                },
                                {
                                    "type": "string"
                                }
                            ]
                        }
                    },
                    "required": [
                        "key",
                        "name",
                        "attribute",
                        "values"
                    ]
                }
            ]
        },
        "variants": {
            "type": "array",
            "items": [
                {
                    "type": "object",
                    "properties": {
                        "attribute1_value": {
                            "type": "string"
                        },
                        "attribute1_name": {
                            "type": "string"
                        },
                        "attribute2_value": {
                            "type": "string"
                        },
                        "attribute2_name": {
                            "type": "string"
                        },
                        "attribute3_value": {
                            "type": "string"
                        },
                        "attribute3_name": {
                            "type": "string"
                        },
                        "price": {
                            "type": "number"
                        },
                        "quantity": {
                            "type": "integer"
                        },
                        "key": {
                            "type": "integer"
                        },
                        "name": {
                            "type": "integer"
                        },
                        "variant_name": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "attribute1_value",
                        "attribute1_name",
                        "attribute2_value",
                        "attribute2_name",
                        "attribute3_value",
                        "attribute3_name",
                        "price",
                        "quantity",
                        "key",
                        "name",
                        "variant_name"
                    ]
                }
            ]
        }
    },
    "required": [
        "name",
        "description",
        "images",
        "attributes",
        "variants"
    ]
}
