create_order_form = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "fullname": {
      "type": "string"
    },
    "address": {
      "type": "string"
    },
    "phone": {
      "type": "string"
    },
    "order_items": {
      "type": "array",
      "items": [
        {
          "type": "object",
          "properties": {
            "product_variant_id": {
              "type": "integer"
            },
            "price": {
              "type": "number"
            },
            "quantity": {
              "type": "integer"
            }
          },
          "required": [
            "product_variant_id",
            "price",
            "quantity"
          ]
        }
      ]
    }
  },
  "required": [
    "fullname",
    "address",
    "phone",
    "order_items"
  ]
}
