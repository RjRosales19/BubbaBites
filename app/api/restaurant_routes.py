from flask import Blueprint, request
from flask_login import login_required, current_user
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
            user_id = current_user.id,
            address = data['address'],
            state = data['state'],
            city = data['city'],
            hours = data['hours'],
            image_url = data['image_url'],
        )
        db.session.add(new_restaurant)
        db.session.commit()
        return new_restaurant.to_dict()
    return

@restaurant_routes.route('/<restaurant_id>', methods=['PUT'])
@login_required
def update_restaurant(restaurant_id):
    """
    Update a restaurant
    """
    form = RestaurantForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    restaurant_to_update = Restaurant.query.get(restaurant_id)
    if form.validate_on_submit():
        data = form.data
        restaurant_to_update.name = data['name']
        restaurant_to_update.user_id = int(current_user.id)
        restaurant_to_update.address = data['address']
        restaurant_to_update.state = data['state']
        restaurant_to_update.city = data['city']
        restaurant_to_update.hours = data['hours']
        restaurant_to_update.image_url = data['image_url']
        print("------------------------------",restaurant_to_update.name)
        db.session.commit()
        return restaurant_to_update.to_dict()
    return 'errors'

@restaurant_routes.route('/<restaurant_id>', methods=['DELETE'])
@login_required
def delete_restaurant(restaurant_id):
    restaurant_to_delete = Restaurant.query.get(restaurant_id)
    db.session.delete(restaurant_to_delete)
    db.session.commit()
    return 'Restaurant has been removed'
