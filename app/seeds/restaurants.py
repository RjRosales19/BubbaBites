from app.models import db, Restaurant, environment, SCHEMA
from sqlalchemy.sql import text

def seed_restaurants():
    restaurant1 = Restaurant(
        name="McDonald's",
        user_id=1,
        address="456 Noting Court",
        city="Columbia",
        state="Maryland",
        hours="09:00 - 18:00",
        image_url="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/71f30ccf-66bd-42f4-8be0-38b6b9657313.png"
    )
    restaurant2 = Restaurant(
        name='Chick-fil-A',
        user_id=2,
        address="123 Street Road",
        city="Seattle",
        state="Washington",
        hours="09:00 - 18:00",
        image_url="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=100/https://doordash-static.s3.amazonaws.com/media/store/header/225b8b4f-8ed4-46a0-ac27-0de36dc1b859.png"
    )
    restaurant3 = Restaurant(
        name='Chipotle',
        user_id=3,
        address="123 Street Road",
        city="Orlando",
        state="Florida",
        hours="09:00 - 18:00",
        image_url="data:image/jpeg;base64,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"
    )
    restaurant4 = Restaurant(
        name='Qdoba',
        user_id=1,
        address="123 Street Road",
        city="Austin",
        state="Texas",
        hours="09:00 - 18:00",
        image_url="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/4b3011e3-5867-4bc7-ad65-a6467733ff63.jpg"
    )
    restaurant5 = Restaurant(
        name='Sushi Q',
        user_id=2,
        address="123 Perry Road",
        city="Richmond",
        state="Virginia",
        hours="09:00 - 18:00",
        image_url="data:image/jpeg;base64,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"
    )
    restaurant6 = Restaurant(
        name='Adel Halal',
        user_id=3,
        address="81st Street",
        city="New York",
        state="New York",
        hours="09:00 - 18:00",
        image_url="https://media.istockphoto.com/id/1010677810/photo/traditional-uzbek-oriental-cuisine-uzbek-family-table-from-different-dishes-for-the-new-year.jpg?s=612x612&w=0&k=20&c=bCezyNqQUeYWFbodrf2kloJJBPPOeXbr4Fwd6B-wfxM="
    )
    restaurant7 = Restaurant(
        name='The Halal Guys',
        user_id=3,
        address="84st Street",
        city="New York",
        state="New York",
        hours="09:00 - 18:00",
        image_url="https://www.vmcdn.ca/f/files/via/images/food/halal-guys-chicken-platter.jpg"
    )
    restaurant8 = Restaurant(
        name='Taste of Tuscany',
        user_id=4,
        address='123 Main Street',
        city='San Francisco',
        state='California',
        hours='11:30 - 21:00',
        image_url='https://tasteoftuscanyrestaurant.com/logo.png'
    )
    restaurant9 = Restaurant(
        name='Spice Palace',
        user_id=5,
        address='45 Curry Lane',
        city='Houston',
        state='Texas',
        hours='12:00 - 22:00',
        image_url='https://f6fd435a0f2c19a33595-43a7480e297bd90c3a25677214011498.ssl.cf1.rackcdn.com/149424979488557998331ml.jpeg'
    )
    restaurant10 = Restaurant(
        name='Sushi Delight',
        user_id=5,
        address='789 Sushi Avenue',
        city='Los Angeles',
        state='California',
        hours='17:00 - 23:00',
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/QTzMjI9Nb_PNBHVFZLXXcQ/348s.jpg'
    )
    restaurant11 = Restaurant(
        name='Mama Mia Pizzeria',
        user_id=6,
        address='567 Pizza Street',
        city='Chicago',
        state='Illinois',
        hours='11:00 - 20:00',
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/4SF8W7t1WdG6JZI0tcGsRw/348s.jpg'
    )
    restaurant12 = Restaurant(
        name='The Veggie Patch',
        user_id=6,
        address='101 Green Avenue',
        city='Seattle',
        state='Washington',
        hours='09:30 - 19:30',
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/-zteEwrENhOLZdJB9faMCA/348s.jpg'
    )
    restaurant13 = Restaurant(
        name='Café Parisienne',
        user_id=7,
        address='33 French Street',
        city='New Orleans',
        state='Louisiana',
        hours='08:00 - 18:00',
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/QMer37GkyV2LSLuATCKtzg/348s.jpg'
    )
    restaurant14 = Restaurant(
        name='Tex-Mex Grill',
        user_id=7,
        address='456 Chili Road',
        city='Austin',
        state='Texas',
        hours='11:00 - 22:00',
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/Lb_5PXtHqOGQ5MU1fxWKdw/348s.jpg'
    )
    restaurant15 = Restaurant(
        name='Szechuan Delights',
        user_id=8,
        address='888 Spicy Lane',
        city='San Francisco',
        state='California',
        hours='12:30 - 20:30',
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/QkFc0xVxCJQlknsN5L-UCg/348s.jpg'
    )
    restaurant16 = Restaurant(
        name='Mediterranean Breeze',
        user_id=8,
        address='789 Olive Avenue',
        city='Miami',
        state='Florida',
        hours='10:00 - 21:00',
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/q4Tltz_aRYTaLx4maMctOg/348s.jpg'
    )
    restaurant17 = Restaurant(
        name='Burger Haven',
        user_id=9,
        address='222 Burger Street',
        city='Denver',
        state='Colorado',
        hours='11:30 - 22:30',
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/poYss8QEZNZI-gFpAef5vA/348s.jpg'
    )
    restaurant18 = Restaurant(
        name='Sushi Sensation',
        user_id=9,
        address='555 Sushi Road',
        city='Los Angeles',
        state='California',
        hours='18:00 - 00:00',
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/nw9qtSZQX5D5krxmAfwY_Q/348s.jpg'
    )
    restaurant19 = Restaurant(
        name='Casa de Tapas',
        user_id=10,
        address='123 Tapas Lane',
        city='New York',
        state='New York',
        hours='16:00 - 23:00',
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/-EDbx1l6I0F3wiSBelYwrw/348s.jpg'
    )
    restaurant20 = Restaurant(
        name='Garden Grill',
        user_id=10,
        address='999 Greenery Road',
        city='Portland',
        state='Oregon',
        hours='09:00 - 20:00',
        image_url='https://s3-media0.fl.yelpcdn.com/bphoto/_FJBz-sIFhh-2Tb5JOu74Q/348s.jpg'
    )

    db.session.add(restaurant1)
    db.session.add(restaurant2)
    db.session.add(restaurant3)
    db.session.add(restaurant4)
    db.session.add(restaurant5)
    db.session.add(restaurant6)
    db.session.add(restaurant7)
    db.session.add(restaurant8)
    db.session.add(restaurant9)
    db.session.add(restaurant10)
    db.session.add(restaurant11)
    db.session.add(restaurant12)
    db.session.add(restaurant13)
    db.session.add(restaurant14)
    db.session.add(restaurant15)
    db.session.add(restaurant16)
    db.session.add(restaurant17)
    db.session.add(restaurant18)
    db.session.add(restaurant19)
    db.session.add(restaurant20)


    db.session.commit()

def undo_restaurants():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.restaurants RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM restaurants"))

    db.session.commit()
