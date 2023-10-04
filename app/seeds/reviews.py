from app.models import db, Review, environment, SCHEMA
from sqlalchemy.sql import text

def seed_reviews():
    review1 = Review(
        user_id=1,
        restaurant_id=6,
        star_rating=4,
        text='Good place to munch',
    )

    review2 = Review(
        user_id=2,
        restaurant_id=5,
        star_rating=5,
        text='Everyone is so friendly',
    )

    review3 = Review(
        user_id=3,
        restaurant_id=4,
        star_rating=2,
        text='Some people say Shepotle is better',
    )

    review4 = Review(
        user_id=3,
        restaurant_id=3,
        star_rating=5,
        text='Wish I went here before going to Xdoba',
    )

    review5 = Review(
        user_id=2,
        restaurant_id=1,
        star_rating=5,
        text='They have the spiciest sprite',
    )

    review6 = Review(
        user_id=1,
        restaurant_id=2,
        star_rating=5,
        text='Eat more chiken or else',
    )

    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)
    db.session.add(review4)
    db.session.add(review5)
    db.session.add(review6)
    db.session.commit()

def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))

    db.session.commit()
