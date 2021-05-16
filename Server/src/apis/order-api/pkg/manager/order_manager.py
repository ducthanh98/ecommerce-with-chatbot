from .....models.entity import OrderItemModel,OrderModel
from .....app import db


class OrderManager:

    def build_order_query(self, args):
        query = OrderModel.query
        user_id = args.get('user_id')

        return query

    def create_order(self, data, user_id):
        session = db.session
        order = OrderModel(user_id=user_id,phone=data["phone"],fullname=data["fullname"],address=data["address"])
        session.add(order)
        session.flush()
        order_items = []
        for item in data["order_items"]:
            item = OrderItemModel(order_id=order.id,
                                  quantity=item["quantity"],
                                  price=item["price"],
                                  product_variant_id=item["product_variant_id"])
            order_items.append(item)

        session.add_all(order_items)
        session.commit()
