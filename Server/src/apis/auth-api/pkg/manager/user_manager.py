from .....models.entity import UserModel
from .....app import db


class UserManager:

    def build_query(self, opts):
        query = UserModel.query

        if 'id' in opts:
            query = query.filter_by(id=opts['id'])

        if 'password' in opts:
            query = query.filter_by(password=opts['password'])

        if 'email' in opts:
            query = query.filter_by(email=opts['email'])

        return query

    def get_user(self, opts):
        query = self.build_query(opts)

        user = query.first()
        return user

    def create_user(self, user):
        db.session.add(user)
        return db.session.commit()
