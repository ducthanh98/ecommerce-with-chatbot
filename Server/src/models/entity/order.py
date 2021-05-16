import datetime
from dataclasses import dataclass

from sqlalchemy.orm import relationship

from typing import List
from sqlalchemy import func

from ...app import db


@dataclass
class OrderModel(db.Model):
    __tablename__ = 'orders'

    id: int

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    status = db.Column(db.Integer)
    phone = db.Column(db.VARCHAR(50))
    fullname = db.Column(db.VARCHAR(255))
    address = db.Column(db.VARCHAR(255))
    created_at = db.Column(db.TIMESTAMP(), default=func.now())
    updated_at = db.Column(db.TIMESTAMP(), onupdate=func.now(), default=func.now())
    order_items = relationship("OrderItemModel", lazy=True)

    def __init__(self, user_id, phone, fullname, address):
        self.name = user_id
        self.phone = phone
        self.fullname = fullname
        self.address = address
        self.status = 1
        self.user_id=user_id
