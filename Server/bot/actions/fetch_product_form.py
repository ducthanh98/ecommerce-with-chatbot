from typing import List, Text

from rasa_sdk import Tracker
from rasa_sdk.forms import FormAction


class FetchProductForm(FormAction):
    """Example of a custom form action"""

    def name(self):
        """Unique identifier of the form"""
        return "fetch_product_form"

    @staticmethod
    def required_slots(tracker: Tracker) -> List[Text]:
        """A list of required slots that the form has to fill"""

        return ["product_attribute", "product_value", "product_price"]

    def submit(self, dispatcher, tracker: Tracker, domain):
        """Define what the form has to do
            	after all required slots are filled"""
        print(tracker.get_slot('product_attribute'))
        print(tracker.get_slot('product_value'))
        dispatcher.utter_message()
        return []
