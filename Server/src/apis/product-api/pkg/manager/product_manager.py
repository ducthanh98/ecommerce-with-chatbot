from .....models.entity import CategoryModel
from .....app import db


class ProductManager:

    def build_category_query(self, args):
        query = CategoryModel.query

        if args.get('id') is not None:
            query = query.filter_by(id=args.get('id'))

        if args.get('name') is not None:
            query = query.filter_by(name=args.get('name'))

        if args.get('activate') is not None:
            query = query.filter_by(activate=args.get('activate'))

        return query

    def get_category(self, opts):
        query = self.build_user_query(opts)

        user = query.first()
        return user

    def fetch_category(self, args):
        query = self.build_category_query(args)
        categories = query.all()
        return categories

    def create_product(self, product_base, attribute_models, variants):
        session = db.session

        session.add_all(attribute_models)
        session.add(product_base)
        session.flush()

        attribute_model_map = []

        for attribute_model in attribute_models:
            # attribute_model_map

        session.rollback()
    def update_category(self, category, category_id):
        session = db.session

        session.query(CategoryModel).filter(CategoryModel.id == category_id).update({
            CategoryModel.name: category['name'],
            CategoryModel.description: category['description'],
            CategoryModel.activate: category['activate'],
            CategoryModel.image: category['image']
        })

        session.commit()
