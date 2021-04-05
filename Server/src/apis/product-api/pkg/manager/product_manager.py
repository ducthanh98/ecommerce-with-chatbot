from .....models.entity import CategoryModel, ProductVariantModel, ProductBaseModel
from .....app import db


class ProductManager:

    def build_product_query(self, args):
        query = ProductBaseModel.query

        if args.get('id') is not None:
            query = query.filter_by(id=args.get('id'))

        if args.get('name') is not None:
            query = query.filter_by(name=args.get('name'))

        if args.get('activate') is not None:
            query = query.filter_by(activate=args.get('activate'))

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

    def create_product(self, product_base, attribute_models, variants):
        session = db.session

        session.add_all(attribute_models)
        session.add(product_base)
        session.flush()

        attribute_model_map = {}

        for attribute_model in attribute_models:
            for attribute_value in attribute_model.product_attributes_values:
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
                                                quantity=variant["quantity"],
                                                attribute1_id=attribute1_id,
                                                attribute2_id=attribute2_id,
                                                attribute3_id=attribute3_id,
                                                product_base_id=product_base.id)
            variant_models.append(variant_model)

        session.add_all(variant_models)
        session.commit()