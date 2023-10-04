from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Review, db
from app.forms.review_form import ReviewForm

review_routes = Blueprint('reviews', __name__)

@review_routes.route('/<restaurant_id>')
@login_required
def get_all_reviews(restaurant_id):
    """
    Get all reviews for a restaurant
    """
    reviews = Review.query.where(Review.restaurant_id == restaurant_id).all()
    print('-----------------------------',reviews)
    return {'reviews': [ review.to_dict() for review in reviews ]}

@review_routes.route('/<restaurant_id>', methods=['POST'])
@login_required
def create_review(restaurant_id):
    """
    Create a new review
    """
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        new_review = Review(
            text = data['text'],
            user_id = current_user.id,
            restaurant_id = restaurant_id,
            star_rating = data['star_rating']
        )
        db.session.add(new_review)
        db.session.commit()
        return new_review.to_dict()
    return
