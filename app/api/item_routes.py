from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Item, db
from app.forms.item_form import ItemForm

item_routes = Blueprint('items', __name__)

@item_routes.route('/<restaurant_id>')
def get_all_items(restaurant_id):
    """
    Get all menu items for a restaurant
    """
    items = Item.query.where(Item.restaurant_id == restaurant_id).all()
    print('----------------ITEMS', items)
    return {'items': [ item.to_dict() for item in items]}

@item_routes.route('/<restaurant_id>', methods=['POST'])
def create_item(restaurant_id):
    """
    Create a new menu item
    """
    form = ItemForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        new_item = Item(
            restaurant_id = restaurant_id,
            name = data['name'],
            description = data['description'],
            price = data['price'],
            image_url = data['image_url']
        )
        db.session.add(new_item)
        db.session.commit()
        return new_item.to_dict()
    return 'Cannot create an Item'

@item_routes.route('/<item_id>', methods= ['PUT'])
@login_required
def edit_item(item_id):
    """
    Edit an item
    """
    form = ItemForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    item_to_edit = Item.query.get(item_id)
    print("---------------",item_to_edit)
    if form.validate_on_submit():
        data = form.data
        print("--------------", data)
        item_to_edit.name = data['name']
        item_to_edit.description = data['description']
        item_to_edit.price = data['price']
        item_to_edit.image_url = data['image_url']
        db.session.commit()
        return item_to_edit.to_dict()
    return 'Cannot edit item'


@item_routes.route('/<item_id>', methods= ['DELETE'])
@login_required
def delete_item(item_id):
    """
    Delete an existing menu Item
    """
    item_to_delete = Item.query.get(item_id)
    db.session.delete(item_to_delete)
    db.session.commit()
    return 'Item has been removed'
