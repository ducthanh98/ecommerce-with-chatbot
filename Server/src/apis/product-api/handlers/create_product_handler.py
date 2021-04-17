from http import HTTPStatus
import jsonschema
from flask import request
import logging
from ....models.entity.product_attribute import ProductAttributeModel
from ....models.entity.product_attribute_value import ProductAttributeValueModel
from ....models.entity.product_base import ProductBaseModel
from ....toolkits import transhttp
from ..pkg.dto.create_product_base_form import create_product_schema
from ....toolkits.constant import MESSAGE
from ..pkg.manager import product_manager


def create_product_handler():
    try:
        data = request.get_json()
        jsonschema.validate(data, schema=create_product_schema, format_checker=jsonschema.FormatChecker())

        attribute_models = []
        if len(data["attributes"]) > 0:
            for attribute in data["attributes"]:

                if len(attribute["values"]) < 1:
                    transhttp.response_error(HTTPStatus.BAD_REQUEST, "Attribute can\'t be empty")

                attribute_value_models = []
                for value in attribute["values"]:
                    attribute_value_model = ProductAttributeValueModel(value=value)
                    attribute_value_models.append(attribute_value_model)

                attribute_model = ProductAttributeModel(name=attribute["attribute"],
                                                        product_attributes_values=attribute_value_models)
                attribute_models.append(attribute_model)

        product_base = ProductBaseModel(name=data["name"],
                                        description=data["description"],
                                        images=data["images"],
                                        category_id=data["category_id"])
        product_manager.create_product(product_base, attribute_models, data["variants"])

        return transhttp.response_json({"success": True})

    except jsonschema.exceptions.ValidationError as e:
        if 'message' not in e.schema:
            return transhttp.response_error(HTTPStatus.BAD_REQUEST, e.message)

        return transhttp.response_error(HTTPStatus.BAD_REQUEST, e.schema['message'])

    except Exception as e:
        logging.error(e)
        return transhttp.response_error(HTTPStatus.INTERNAL_SERVER_ERROR, MESSAGE['MESSAGE_SERVER_INTERNAL'])
