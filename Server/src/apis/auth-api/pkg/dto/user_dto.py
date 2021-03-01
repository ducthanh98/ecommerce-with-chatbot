from .....app import ma


class UserDTO(ma.SQLAlchemyAutoSchema):
    class Meta:
        fields = ("id", "email", "fullname")
