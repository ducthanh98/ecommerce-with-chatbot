import logging

from rasa_sdk.executor import CollectingDispatcher
from rasa_sdk.types import DomainDict
from sqlalchemy import create_engine, text, Column, Integer, String, ARRAY, Boolean, Table, DECIMAL, or_
from typing import Text, List, Dict, Union, Any

from rasa_sdk import Tracker
from rasa_sdk.forms import FormAction
from sqlalchemy import MetaData

meta = MetaData()

product_bases = Table(
    'product_bases', meta,
    Column('id', Integer, primary_key=True),
    Column('name', String),
    Column('images', ARRAY(String)),
    Column('description', String),
    Column('activate', Boolean),
    Column('category_id', Integer)
)

product_variants = Table(
    'product_variants', meta,
    Column('id', Integer, primary_key=True),
    Column('name', String),
    Column('price', DECIMAL),
    Column('attribute1_id', Integer),
    Column('attribute2_id', Integer),
    Column('attribute3_id', Integer),
    Column('product_base_id', Integer),
    Column('quantity', Integer)
)

product_attributes = Table(
    'product_attributes', meta,
    Column('id', Integer, primary_key=True),
    Column('name', String),
    Column('product_base_id', Integer)
)

product_attribute_values = Table(
    'product_attribute_values', meta,
    Column('id', Integer, primary_key=True),
    Column('value', String),
    Column('product_attribute_id', Integer)
)


class ProductForm(FormAction):
    """Example of a custom form action"""
    sessionMaker = None

    def __init__(self):
        super().__init__()
        uri = "postgresql://postgres:postgresql@localhost:5432/ecommerce"
        engine = create_engine(uri, echo=True)
        from sqlalchemy.orm import sessionmaker
        self.sessionMaker = sessionmaker(bind=engine)
        logging.info('Connect DB')

    def name(self):
        """Unique identifier of the form"""
        return "product_form"

    @staticmethod
    def required_slots(tracker: Tracker) -> List[Text]:
        """A list of required slots that the form has to fill"""

        return ["product_name", "attribute_value", "price_from", "price_to"]

    def slot_mappings(self) -> Dict[Text, Union[Dict, List[Dict]]]:
        return {
            "product_name": [
                self.from_entity(entity="product_name", intent=["product_name_entry"]),
            ],
            "attribute_value": [
                self.from_entity(entity="attribute_value", intent=["attribute_value_entry"]),
            ],
            "price_from": [
                self.from_entity(entity="price_entities", role="price_from", intent=["price_from_entry"]),
            ],
            "price_to": [
                self.from_entity(entity="price_entities", role="price_to",
                                 intent=["price_to_entry", "price_from_entry"]),
            ]

        }

    def submit(self, dispatcher, tracker: Tracker, domain):
        """Define what the form has to do
            	after all required slots are filled"""

        try:
            product_name = tracker.get_slot("product_name")
            attribute_value = tracker.get_slot("attribute_value")
            price_from = tracker.get_slot("price_from")
            price_to = tracker.get_slot("price_to")

            product_attributes1 = product_attributes.alias("attribute1")
            product_attributes2 = product_attributes.alias("attribute2")
            product_attributes3 = product_attributes.alias("attribute3")

            product_attribute_values1 = product_attribute_values.alias("attribute_value1")
            product_attribute_values2 = product_attribute_values.alias("attribute_value2")
            product_attribute_values3 = product_attribute_values.alias("attribute_value3")
            session = self.sessionMaker()
            subquery = product_variants \
                .join(product_attribute_values1,
                      product_variants.c.attribute1_id == product_attribute_values1.c.id, isouter=True) \
                .join(product_attributes1,
                      product_attribute_values1.c.product_attribute_id == product_attributes1.c.id) \
                .join(product_attribute_values2,
                      product_variants.c.attribute2_id == product_attribute_values2.c.id, isouter=True) \
                .join(product_attributes2,
                      product_attribute_values2.c.product_attribute_id == product_attributes2.c.id) \
                .join(product_attribute_values3,
                      product_variants.c.attribute3_id == product_attribute_values3.c.id, isouter=True) \
                .join(product_attributes3,
                      product_attribute_values3.c.product_attribute_id == product_attributes3.c.id)
            if isinstance(attribute_value, list) and len(attribute_value) > 0:
                subquery = subquery.select().where(or_(product_attribute_values1.c.name.in_(attribute_value),
                                                       product_attribute_values2.c.name.in_(attribute_value),
                                                       product_attribute_values3.c.name.in_(attribute_value)))
            elif isinstance(attribute_value, list) and attribute_value != "":
                subquery = subquery.select().where(or_(product_attribute_values1.c.name.ilike(f'%{attribute_value}%'),
                                                       product_attribute_values2.c.name.ilike(f'%{attribute_value}%'),
                                                       product_attribute_values3.c.name.ilike(f'%{attribute_value}%')))

            if price_from != 0:


            result = [dict(row) for row in products]
            if len(result) < 1:
                dispatcher.utter_message(text="Hiện tại chưa tìm thấy sản phẩm nào phù hợp với yêu cầu của bạn !")
            else:
                dispatcher.utter_message(text="Đây là một số sản phẩm tôi gợi ý cho bạn ")
                for product in products:
                    dispatcher.utter_message(text=product.name,
                                             image=f'http://localhost:5000/images/${product.images[0]}')
        except Exception as e:
            logging.error(e)
            dispatcher.utter_message(text="Hiện tại chưa tìm thấy sản phẩm nào phù hợp với yêu cầu của bạn !")

        return []
