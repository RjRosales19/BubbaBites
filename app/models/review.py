from .db import db, environment, SCHEMA, add_prefix_for_prod
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

class Review(db.Model):
    __tablename__ = 'reviews'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    restaurant_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('restaurants.id')), nullable=False)
    star_rating = db.Column(db.Integer, nullable=False)
    text = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    user = db.relationship('User', back_populates='review')
    restaurant = db.relationship('Restaurant', back_populates='review')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'restaurant_id': self.restaurant_id,
            'star_rating': self.star_rating,
            'text': self.text,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
        }
