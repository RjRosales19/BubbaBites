from app.models import db, Restaurant, environment, SCHEMA
from sqlalchemy.sql import text

def seed_restaurants():
    restaurant1 = Restaurant(
        name='MickyD',
        user_id=1,
        address="456 Noting Court",
        city="Columbia",
        state="Maryland",
        hours="09:00 - 18:00",
        image_url="image_url"
    )
    restaurant2 = Restaurant(
        name='Chikfila',
        user_id=2,
        address="123 Street Road",
        city="Seattle",
        state="Washington",
        hours="09:00 - 18:00",
        image_url="image_url"
    )
    restaurant3 = Restaurant(
        name='Chipotel',
        user_id=3,
        address="123 Street Road",
        city="Orlando",
        state="Florida",
        hours="09:00 - 18:00",
        image_url="image_url"
    )
    restaurant4 = Restaurant(
        name='Xdoba',
        user_id=1,
        address="123 Street Road",
        city="Austin",
        state="Texas",
        hours="09:00 - 18:00",
        image_url="image_url"
    )
    restaurant5 = Restaurant(
        name='SushiQ',
        user_id=2,
        address="123 Perry Road",
        city="Richmond",
        state="Virginia",
        hours="09:00 - 18:00",
        image_url="image_url"
    )
    restaurant6 = Restaurant(
        name='Adel Halal',
        user_id=3,
        address="81st Street",
        city="New York",
        state="New York",
        hours="09:00 - 18:00",
        image_url="image_url"
    )

    db.session.add(restaurant1)
    db.session.add(restaurant2)
    db.session.add(restaurant3)
    db.session.add(restaurant4)
    db.session.add(restaurant5)
    db.session.add(restaurant6)
    db.session.commit()

def undo_restaurants():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.restaurants RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM restaurants"))

    db.session.commit()
