from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Review, db

review_routes = Blueprint('reviews', __name__)

@review_routes.route('/<restaurant_id>')
@login_required
def get_all_reviews(restaurant_id):
    """
    Get all reviews for a restaurant
    """
    reviews = Review.query.where(Review.restaurant_id == restaurant_id).all()
    return {'reviews': [review.to_dict() for review in reviews]}
