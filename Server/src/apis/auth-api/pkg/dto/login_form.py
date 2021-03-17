from .....app import ma


class UserDTO(ma.SQLAlchemyAutoSchema):
    class Meta:
        fields = ("id", "email", "fullname")


login_form_schema = {
    "type": "object",
    "properties": {
        "email": {
            "type": "string",
            "format": "email",
            "messages": "email is invalid",
        },
        "password": {
            "type": "string",
            "minLength": 6,
            "maxLength": 255,
            "message": "password must be at least 6 character"
        },
    },
    "required": ["email", "password"]

}
