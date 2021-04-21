from .....models.entity import CategoryModel
from .....app import db


class CategoryManager:

    def build_category_query(self, args):
        query = CategoryModel.query
        category_id = args.get('id')
        name = args.get('name')
        if category_id:
            query = query.filter_by(id=args.get('id'))

        if name:
            query = query.filter(CategoryModel.name.ilike(f'%{name}%'))

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
        session = db.session
        category_model = CategoryModel(name=category['name'], description=category['description'],image=category['image'])
        session.add(category_model)
        return session.commit()

    def update_category(self, category,category_id):
        session = db.session

        session.query(CategoryModel).filter(CategoryModel.id == category_id).update({
            CategoryModel.name: category['name'],
            CategoryModel.description: category['description'],
            CategoryModel.activate: category['activate'],
            CategoryModel.image : category['image']
        })

        session.commit()

