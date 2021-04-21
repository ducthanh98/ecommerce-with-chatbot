from flask import session

from .....models.entity import CategoryModel, ProductVariantModel, ProductBaseModel
from .....app import db


class ProductManager:

    def build_product_query(self, args):
        query = ProductBaseModel.query
        price_from = args.get('price_from')
        id = args.get('id')
        price_to = args.get('price_to')
        category_id = args.get('category_id')
        name = args.get('name')

        if id:
            query = query.filter_by(id=args.get('id'))

        if category_id:
            query = query.filter_by(category_id=args.get('category_id'))

        if name:
            name = "%{}%".format(args.get('name'))
            query = query.filter(ProductBaseModel.name.ilike(name))

        if args.get('activate') is not None:
            query = query.filter_by(activate=args.get('activate'))

        if price_from and price_to:
            price_from = args.get('price_from')
            price_to = args.get('price_to')
            subquery = db.session.query(ProductVariantModel.product_base_id). \
                filter(ProductVariantModel.price.between(price_from, price_to)). \
                subquery()
            query = query.filter(ProductBaseModel.id.in_(subquery))
        elif price_from:
            price_from = args.get('price_from')
            subquery = db.session.query(ProductVariantModel.product_base_id). \
                filter(ProductVariantModel.price.__gt__(price_from)). \
                subquery()
            query = query.filter(ProductBaseModel.id.in_(subquery))
        elif price_to:
            price_to = args.get('price_to')
            subquery = db.session.query(ProductVariantModel.product_base_id). \
                filter(ProductVariantModel.price.__lt__(price_to)). \
                subquery()
            query = query.filter(ProductBaseModel.id.in_(subquery))

        return query

    def fetch_product(self, opts):
        query = self.build_product_query(opts)
        count = query.count()

        if 'page' in opts:
            page = int(opts.get('page'))
            limit = int(opts.get('limit'))

            offset = (page - 1) * limit
            query = query.offset(offset)

        if 'limit' in opts:
            query = query.limit(opts['limit'])

        user = query.all()
        return user, count

    def get_product(self, opts):
        query = ProductBaseModel.query.filter_by(id=opts['id'])
        product = query.first()
        return product, None

    def create_product(self, product_base, attribute_models, variants):
        session = db.session
        session.add(product_base)
        session.flush()

        for attribute_model in attribute_models:
            attribute_model.product_base_id = product_base.id

        session.add_all(attribute_models)
        session.flush()

        attribute_model_map = {}

        for attribute_model in attribute_models:
            for attribute_value in attribute_model.values:
                key = f'{attribute_model.name}-{attribute_value.value}'
                attribute_model_map[key] = attribute_value.id

        variant_models = []
        for variant in variants:
            attribute1_key = f'{variant["attribute1_name"]}-{variant["attribute1_value"]}'
            attribute2_key = f'{variant["attribute2_name"]}-{variant["attribute2_value"]}'
            attribute3_key = f'{variant["attribute3_name"]}-{variant["attribute3_value"]}'

            attribute1_id = attribute_model_map[attribute1_key] if attribute1_key in attribute_model_map else None
            attribute2_id = attribute_model_map[attribute2_key] if attribute2_key in attribute_model_map else None
            attribute3_id = attribute_model_map[attribute3_key] if attribute3_key in attribute_model_map else None

            variant_model = ProductVariantModel(name=variant["variant_name"],
                                                price=variant["price"],
                                                attribute1_id=attribute1_id,
                                                attribute2_id=attribute2_id,
                                                attribute3_id=attribute3_id,
                                                product_base_id=product_base.id,
                                                quantity=variant["quantity"])
            variant_models.append(variant_model)

        session.add_all(variant_models)
        session.commit()
