from app.models import db, Item, environment, SCHEMA
from sqlalchemy.sql import text

def seed_items():
    item1 = Item(
        restaurant_id=1,
        name='Big Mac Meal',
        description="The Big Mac Meal comes with a Big Mac, McDonald's World Famous Fries®, and a Drink. Ever wondered what's on a Big Mac®? The McDonald's Big Mac® is a 100% beef burger with a taste like no other. The mouthwatering perfection starts with two 100% pure all beef patties and Big Mac® sauce sandwiched between a sesame seed bun. It’s topped off with pickles, crisp shredded lettuce, finely chopped onion, and a slice of American cheese. It contains no artificial flavors, preservatives, or added colors from artificial sources. Our pickle contains an artificial preservative, so skip it if you like.",
        price= 10.99,
        image_url= "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1024,format=auto,quality=50/https://cdn.doordash.com/media/photosV2/335aa95b-76ec-43f7-8f56-64e090ad0919-retina-large.jpg"
    )
    item2 = Item(
        restaurant_id=2,
        name='Chick-fil-A Sandwich Meal',
        description="A boneless breast of chicken seasoned to perfection, freshly breaded, pressure cooked in 100% refined peanut oil.",
        price= 12.99,
        image_url= "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1024,format=auto,quality=50/https://cdn.doordash.com/media/photosV2/44a4b61e-af7b-47a1-8215-aed9b2d220ad-retina-large.JPG"
    )
    item3 = Item(
        restaurant_id=3,
        name='Burrito Bowl',
        description="Your choice of freshly grilled meat or sofritas served in a delicious bowl with rice, beans, or fajita veggies, and topped with guac, salsa, queso blanco, sour cream or cheese.",
        price= 11.99,
        image_url= "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1024,format=auto,quality=50/https://cdn.doordash.com/media/photosV2/6fb5bcc3-8776-47ba-8191-44ec6ce08274-retina-large.png"
    )
    item4 = Item(
        restaurant_id=4,
        name='Burrito',
        description="Choice of protein, rice, beans, flavorful salsas, sauces, and toppings in a warm tortilla. Top it with guacamole and queso for FREE! [Cal 590-640]",
        price= 10.99,
        image_url= "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1024,format=auto,quality=50/https://cdn.doordash.com/media/photosV2/5a3ad8ed-c659-49aa-af3b-97c304f67e91-retina-large.jpg"
    )
    item5 = Item(
        restaurant_id=5,
        name='Lobster & Crab Roll',
        description="Tempura lobster, crab meat, mango, cream cheese, avocado, soybean wrap with spicy mayo and teriyaki sauce.",
        price= 15.99,
        image_url= "https://img.cdn4dd.com/p/fit=cover,width=600,height=300,format=auto,quality=50/media/photos/7aa00ef1-203e-43a9-a99c-966cc6c2bb7d-retina-large.jpg"
    )
    item6 = Item(
        restaurant_id=6,
        name='Combo over Rice',
        description="A delicious meal combining our lamb gyro and chicken gyro meat, marinated for 24 hours and grilled to perfection, served on our fluffy aromatic basmati rice with a salad in the corner consisting of lettuce, tomatoes, cucumbers and your choice of sauces drizzled all over the platter- or simply ask for the sauces on the side.",
        price= 13.99,
        image_url= "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://cdn.doordash.com/media/photos/6ad035a2-37a6-4cca-a42d-d113e5557ba7-retina-large.jpg"
    )

    db.session.add(item1)
    db.session.add(item2)
    db.session.add(item3)
    db.session.add(item4)
    db.session.add(item5)
    db.session.add(item6)
    db.session.commit()

def undo_items():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.items RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM items"))

    db.session.commit()
