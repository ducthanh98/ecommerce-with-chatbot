from .....models.entity import OrderItemModel, OrderModel
from .....app import db


class OrderManager:

    def build_order_query(self, args):
        query = OrderModel.query
        order_id = args.get('id')
        user_id = args.get('user_id')

        if user_id:
            query = query.filter_by(user_id=user_id)
        if order_id:
            query = query.filter_by(id=order_id)

        return query

    def fetch_orders(self, opts):
        query = self.build_order_query(opts)
        count = query.count()

        if 'page' in opts:
            page = int(opts.get('page'))
            limit = int(opts.get('limit'))

            offset = (page - 1) * limit
            query = query.offset(offset)

        if 'limit' in opts:
            query = query.limit(opts['limit'])

        order = query.all()
        return order, count

    def create_order(self, data, user_id):
        session = db.session
        order = OrderModel(user_id=user_id, phone=data["phone"], fullname=data["fullname"], address=data["address"])
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

    def update_order(self, data, order_id):
        session = db.session
        session \
            .query(OrderModel) \
            .filter(OrderModel.id == order_id) \
            .update({OrderModel.status: data["status"]}, synchronize_session=False)
        session.commit()
