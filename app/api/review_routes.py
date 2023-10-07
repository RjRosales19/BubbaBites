from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Review, db
from app.forms.review_form import ReviewForm

review_routes = Blueprint('reviews', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

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
        print("----------------------------", new_review)
        db.session.add(new_review)
        db.session.commit()
        return new_review.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@review_routes.route('/<review_id>', methods=['PUT'])
@login_required
def update_review(review_id):
    """
    Update a review
    """
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    review_to_update = Review.query.get(review_id)
    if form.validate_on_submit():
        data = form.data
        review_to_update.text = data['text']
        review_to_update.star_rating = data['star_rating']
        review_to_update.user_id = current_user.id
        db.session.commit()
        return review_to_update.to_dict()
    return 'errors'

@review_routes.route('/<review_id>', methods=['DELETE'])
@login_required
def delete_review(review_id):
    """
    Delete a review
    """
    review_to_delete = Review.query.get(review_id)
    db.session.delete(review_to_delete)
    db.session.commit()
    return 'Review post has been removed'
