import time

from sqlalchemy import func

from ...app import db


class UserModel(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String())
    password = db.Column(db.String())
    fullname = db.Column(db.String())
    address = db.Column(db.String())
    country = db.Column(db.String())
    zipcode = db.Column(db.String())
    avatar = db.Column(db.String())
    activate = db.Column(db.Boolean())
    created_at = db.Column(db.TIMESTAMP(), server_default=func.now()),
    updated_at = db.Column(db.TIMESTAMP(), onupdate=func.now())

    def __init__(self, email, password, fullname, address='', country='', zipcode='', avatar='', activate=True):
        self.email = email
        self.password = password
        self.fullname = fullname
        self.address = address
        self.country = country
        self.zipcode = zipcode
        self.avatar = avatar
        self.activate = activate
