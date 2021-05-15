## Chào hỏi đưa tên

* greet
    - utter_greet
* give_name
    - utter_greet_with_name
* bye
    - utter_bye

## Đưa tên luôn

* give_name
    - utter_greet_with_name

## Search product 1

* greet
    - utter_greet
* ask_product
    - product_form
    - form{"product_name": "product_form"}
    - slot{"product_name" : "online"}
    - form{"attribute_value": "product_form"}
    - form{"product_price": "product_form"}
    - form{"product_name": null}
    - form{"attribute_value": null}
    - form{"product_price": null}
* bye
    - utter_bye

## Search product 2

* ask_product
    - product_form
    - form{"product_name": "product_form"}
    - slot{"product_name" : "online"}
    - form{"attribute_value": "product_form"}
    - form{"product_price": "product_form"}
    - form{"attribute_value": null}
    - form{"product_name": null}
    - form{"product_price": null}

* bye
    - utter_bye

## Search product 3

* greet
    - utter_greet
* give_name
    - utter_greet_with_name
* ask_product
    - product_form
    - form{"product_name": "product_form"}
    - slot{"product_name" : "online"}
    - form{"attribute_value": "product_form"}
    - form{"price_from": "product_form"}
    - form{"price_to": "product_form"}
    - form{"product_name": null}
    - form{"attribute_value": null}
    - form{"product_price": null}

* bye
    - utter_bye

## Search product 4

* ask_product
    - product_form
    - form{"product_name": "product_form"}
    - slot{"product_name" : "online"}
    - form{"attribute_value": "product_form"}
    - form{"product_price": "product_form"}
    - form{"product_name": null}
    - form{"product_value": null}
    - form{"product_price": null}

## Chào - hỏi chức năng - chào

* greet
    - utter_greet
* ask_func_list
    - utter_func_list
* bye
    - utter_bye

## Chào - tam biệt

* greet
    - utter_greet
* bye
    - utter_bye

## Hỏi chức năng

* ask_func_list
    - utter_func_list

## Cảm ơn

* thank
    - utter_thank
 