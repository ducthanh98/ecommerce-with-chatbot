from .....models.entity import UserModel


class UserManager:

    def get_user(self, email, password):
        user = UserModel.query.filter_by(email=email).first()
        return user
