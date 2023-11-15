from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Cart, db

cart_routes = Blueprint('carts', __name__)

@cart_routes.route('/')
