from flask import Blueprint
from flask_login import login_required, current_user
from app.models import Item, db

item_routes = Blueprint('items', __name__)

@item_routes.route('/<restaurant_id>')
def get_all_items(restaurant_id):
    """
    Get all menu items for a restaurant
    """
    items = Item.query.where(Item.restaurant_id == restaurant_id).all()
    print('----------------ITEMS', items)
    return {'items': [ item.to_dict() for item in items]}
