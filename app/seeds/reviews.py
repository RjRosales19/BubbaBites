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

    review7 = Review(
        user_id=3,
        restaurant_id=7,
        star_rating=3,
        text='Burger Haven is decent, but not exceptional.'
    )

    review8 = Review(
        user_id=1,
        restaurant_id=8,
        star_rating=5,
        text='Fresh and delicious, a hidden gem!'
    )

    review9 = Review(
        user_id=3,
        restaurant_id=8,
        star_rating=4,
        text='Authentic French cuisine, loved it!'
    )

    review10 = Review(
        user_id=2,
        restaurant_id=12,
        star_rating=3,
        text='Mediterranean Breeze was just okay.'
    )

    review11 = Review(
        user_id=2,
        restaurant_id=19,
        star_rating=5,
        text='Casa de Tapas is a must-visit!'
    )

    review12 = Review(
        user_id=4,
        restaurant_id=20,
        star_rating=2,
        text='Overpriced and underwhelming.'
    )

    review13 = Review(
        user_id=4,
        restaurant_id=10,
        star_rating=4,
        text='Satisfying meal at Italian Trattoria.'
    )

    review14 = Review(
        user_id=4,
        restaurant_id=15,
        star_rating=5,
        text='Tex-Mex Grill is my go-to place!'
    )

    review15 = Review(
        user_id=4,
        restaurant_id=11,
        star_rating=3,
        text='Sushi Delight needs improvement.'
    )

    review16 = Review(
        user_id=5,
        restaurant_id=14,
        star_rating=5,
        text='Best sushi in town at Sushi Sensation!'
    )

    review17 = Review(
        user_id=5,
        restaurant_id=17,
        star_rating=4,
        text='A tasty meal at Burger Haven.'
    )

    review18 = Review(
        user_id=5,
        restaurant_id=12,
        star_rating=3,
        text='Could be better at Adel Halal.'
    )

    review19 = Review(
        user_id=5,
        restaurant_id=13,
        star_rating=4,
        text='Good variety of dishes at Indian Spice.'
    )

    review20 = Review(
        user_id=6,
        restaurant_id=16,
        star_rating=5,
        text='Absolutely amazing, a must-visit!'
    )

    review21 = Review(
        user_id=6,
        restaurant_id=9,
        star_rating=4,
        text='Garden Grill has great ambiance.'
    )

    review22 = Review(
        user_id=6,
        restaurant_id=18,
        star_rating=3,
        text='Not as vegetarian-friendly as expected.'
    )

    review23 = Review(
        user_id=6,
        restaurant_id=11,
        star_rating=5,
        text='I keep coming back to Tex-Mex Grill!'
    )

    review24 = Review(
        user_id=7,
        restaurant_id=14,
        star_rating=2,
        text='Mediocre experience at an average restaurant.'
    )

    review25 = Review(
        user_id=7,
        restaurant_id=7,
        star_rating=4,
        text='Adel Halal has delicious dishes.'
    )

    review26 = Review(
        user_id=7,
        restaurant_id=20,
        star_rating=5,
        text='Italian Trattoria is a hidden gem.'
    )

    review27 = Review(
        user_id=7,
        restaurant_id=19,
        star_rating=3,
        text='Casa de Tapas was decent, but not exceptional.'
    )

    review28 = Review(
        user_id=8,
        restaurant_id=1,
        star_rating=4,
        text='Mediterranean Breeze offers a nice selection.'
    )

    review29 = Review(
        user_id=8,
        restaurant_id=6,
        star_rating=5,
        text='Sushi Delight is my favorite sushi spot!'
    )

    review30 = Review(
        user_id=8,
        restaurant_id=12,
        star_rating=3,
        text='Sushi Sensation needs better service.'
    )

    review31 = Review(
        user_id=8,
        restaurant_id=18,
        star_rating=4,
        text='Enjoyed a good meal at The Veggie Patch.'
    )

    review32 = Review(
        user_id=9,
        restaurant_id=2,
        star_rating=5,
        text='Always a delightful experience at Taste of Tuscany!'
    )

    review33 = Review(
        user_id=9,
        restaurant_id=10,
        star_rating=3,
        text='Spice Palace is just okay.'
    )

    review34 = Review(
        user_id=9,
        restaurant_id=4,
        star_rating=4,
        text='Delicious French cuisine at Café Parisienne.'
    )

    review35 = Review(
        user_id=9,
        restaurant_id=15,
        star_rating=5,
        text='Adel Halal never disappoints!'
    )
    review36 = Review(
        user_id=10,
        restaurant_id=3,
        star_rating=4,
        text='Great food, friendly staff!'
    )

    review37 = Review(
        user_id=10,
        restaurant_id=16,
        star_rating=3,
        text='Average experience, nothing special.'
    )

    review38 = Review(
        user_id=10,
        restaurant_id=17,
        star_rating=5,
        text='Outstanding service and delicious food!'
    )

    review39 = Review(
        user_id=10,
        restaurant_id=9,
        star_rating=2,
        text='Disappointing meal, won\'t be returning.'
    )

    review40 = Review(
        user_id=10,
        restaurant_id=5,
        star_rating=4,
        text='Loved the vegetarian options!'
    )

    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)
    db.session.add(review4)
    db.session.add(review5)
    db.session.add(review6)
    db.session.add(review7)
    db.session.add(review8)
    db.session.add(review9)
    db.session.add(review10)
    db.session.add(review21)
    db.session.add(review22)
    db.session.add(review23)
    db.session.add(review24)
    db.session.add(review25)
    db.session.add(review26)
    db.session.add(review27)
    db.session.add(review28)
    db.session.add(review29)
    db.session.add(review20)
    db.session.add(review31)
    db.session.add(review32)
    db.session.add(review33)
    db.session.add(review34)
    db.session.add(review35)
    db.session.add(review36)
    db.session.add(review37)
    db.session.add(review38)
    db.session.add(review39)
    db.session.add(review30)
    db.session.add(review40)
    db.session.commit()

def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))

    db.session.commit()
