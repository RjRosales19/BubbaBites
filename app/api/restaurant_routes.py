from flask import Blueprint, request
from flask_login import login_required
from app.models import Restaurant, db
from app.forms.restaurant_form import RestaurantForm
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

@restaurant_routes.route('', methods=['POST'])
@login_required
def create_restaurant():
    """
    Create a new restaurant
    """
    form = RestaurantForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        new_restaurant = Restaurant(
            name = data['name'],
            address = data['address'],
            state = data['name'],
            city = data['name'],
            hours = data['hours'],
            image_url = data['name'],
        )
        db.session.add(new_restaurant)
        db.session.commit()
        return new_restaurant.to_dict()
    return
