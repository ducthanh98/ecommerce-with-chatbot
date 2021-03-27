from .....models.entity import CategoryModel
from .....app import db


class CategoryManager:

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

    def create_category(self, category):
        db.session.add(category)
        return db.session.commit()
