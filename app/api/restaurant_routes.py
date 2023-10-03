from flask import Blueprint
from flask_login import login_required
from app.models import Restaurant, db

restaurant_routes = Blueprint('restaurants', __name__)

@restaurant_routes.route('')
def get_all_restaurants():
    """
    Get all restaurants
    """
    all_restaurants = Restaurant.query.all()
    return {'restaurants': [restaurant.to_dict() for restaurant in all_restaurants]}

@restaurant_routes.route('/<restaurant_id>')
def get_one_restaurant(restaurant_id):
    """
    Get one restaurant
    """
    restaurant = Restaurant.query.where(Restaurant.id == restaurant_id).first()

    print("----------------------",restaurant)
    return restaurant.to_dict()
