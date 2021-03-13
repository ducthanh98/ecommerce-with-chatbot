from .....app import ma


class UserDTO(ma.SQLAlchemyAutoSchema):
    class Meta:
        fields = ("id", "email", "fullname")


login_form_schema = {
    "type": "object",
    "properties": {
        "email": {"type": "string", "format": "email"},
        "password": {
            "type": "string",
            "minLength": 6,
            "maxLength": 50,
            "message": "Password is invalid"
        }
    },
    "required": ["email", "password"]

}
