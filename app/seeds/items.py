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
    item7 = Item(
        restaurant_id=1,
        name='10 Piece McNuggets Meal',
        description="The 10 Piece McNuggets Meal comes with a 10 Piece McNuggets, McDonald's World Famous Fries®, and a Drink",
        price= 10.99,
        image_url= "https://img.cdn4dd.com/p/fit=cover,width=600,height=300,format=auto,quality=50/media/photos/7aa00ef1-203e-43a9-a99c-966cc6c2bb7d-retina-large.jpg"
    )
    item8 = Item(
        restaurant_id=2,
        name='Spicy Chicken Sandwich Deluxe Meal',
        description="A boneless breast of chicken seasoned with a spicy blend of peppers, freshly breaded, pressure cooked in peanut oil and served on a toasted, buttered bun with dill pickle chips, Green Leaf lettuce, tomato and cheese",
        price= 13.39,
        image_url= "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1024,format=auto,quality=50/https://cdn.doordash.com/media/photosV2/559800d4-b8a8-4a2c-aa70-bbba5a867688-retina-large.JPG"
    )
    item9 = Item(
        restaurant_id=3,
        name='Burrito',
        description="Your choice of freshly grilled meat or sofritas wrapped in a warm flour tortilla with rice, beans, or fajita veggies, and topped with guac, salsa, queso blanco, sour cream or cheese.",
        price= 12.50,
        image_url= "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1024,format=auto,quality=50/https://cdn.doordash.com/media/photosV2/fd2bcdd0-c64d-48bc-b7fe-4d47a42bfc0f-retina-large.png"
    )
    item10 = Item(
        restaurant_id=4,
        name='Bowl',
        description="Choice of protein, rice, beans, flavorful salsas, sauces, and toppings. Top it with guacamole and queso for FREE! [Cal 310-330]",
        price= 12.50,
        image_url= "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1024,format=auto,quality=50/https://cdn.doordash.com/media/photosV2/f3cda3ac-2e74-4ae2-82bb-f8096d95cddf-retina-large.jpg"
    )
    item11 = Item(
        restaurant_id=5,
        name='Green Dragon',
        description="Eel and cucumber roll topped with Avocado and roe.",
        price= 16.50,
        image_url= "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://cdn.doordash.com/media/photos/b87c8646-ef2f-4e28-a8b4-88723b66f57b-retina-large.jpg"
    )
    item12 = Item(
        restaurant_id=6,
        name='Chicken Over Rice Platter',
        description="Chicken with rice and veggies topped with white and hot sauce",
        price= 11.50,
        image_url= "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1920,format=auto,quality=50/https://cdn.doordash.com/media/photos/b87c8646-ef2f-4e28-a8b4-88723b66f57b-retina-large.jpg"
    )
    item13 = Item(
        restaurant_id=7,
        name='Chicken Gyro with Rice',
        description="Chicken Gyro with Rice and Salad Cooked with onions",
        price= 11.99,
        image_url= "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1024,format=auto,quality=50/https://cdn.doordash.com/media/photosV2/ce88e232-d796-499d-b12f-a7f0027fce99-retina-large.JPG"
    )
    item14 = Item(
        restaurant_id=7,
        name='Mix Gyro with Rice',
        description="Chicken & Lamb Gyro with Rice and Salad",
        price= 11.99,
        image_url= "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1024,format=auto,quality=50/https://cdn.doordash.com/media/photosV2/c294cf72-5457-4420-ab29-4949c9192e3e-retina-large.JPG"
    )
    item15 = Item(
        restaurant_id=8,
        name='NONNA’S',
        description="Extra thin crust pan pizza layered with mozzarella & spotted with a flavorful herb San Marzano tomato sauce",
        price= 18.95,
        image_url= "https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/lqakcjxf/8124496d-90d1-49e7-8349-11b792e32147.jpg"
    )
    item16 = Item(
        restaurant_id=8,
        name='HAWAIIAN PIE',
        description="Tomato sauce & mozzarella cheese, ham & pineapple",
        price= 21.50,
        image_url= "https://copykat.com/wp-content/uploads/2010/02/lubyshawaiianpie.jpg"
    )
    item17 = Item(
        restaurant_id=9,
        name='Butter Chicken',
        description="Boneless chicken cooked with tomatoe sauce and spices",
        price= 11.99,
        image_url= "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1024,format=auto,quality=50/https://cdn.doordash.com/media/photosV2/3b6822d4-0fb1-4607-95d5-6381c1a4bb1c-retina-large.jpg"
    )
    item18 = Item(
        restaurant_id=9,
        name='Chicken tikka masala',
        description="Chicken cooked in masala sauce a rich creamy tomatoes based with almond",
        price= 10.99,
        image_url= "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1024,format=auto,quality=50/https://cdn.doordash.com/media/photosV2/48c80d43-efc5-47e9-80a9-ebe24db24cf8-retina-large.jpg"
    )
    item19 = Item(
        restaurant_id=10,
        name='Dynamite Roll',
        description="Crab, avocado, and cucumber topped with scallop, crawfish, and mushroom baked with house bake sauce also topped with eel sauce, tempura flakes, smelt eggs, and green onion",
        price= 15.99,
        image_url= "https://misophat.com/wp-content/uploads/2019/08/dynamite.jpg"
    )
    item20 = Item(
        restaurant_id=10,
        name='Fusion Roll',
        description="Shrimp tempura, spicy crab and avocado topped with seared salmon with cajun seasonings topped with red onions, cilantro, and soy mustard sauce",
        price= 16.99,
        image_url= "https://fusionsteakhouse.com/wp-content/uploads/2016/05/Crazy-Web.jpg"
    )
    item21 = Item(
        restaurant_id=11,
        name='Pepperoni Bacon Pizza',
        description="Classic pepperoni pizza with marinara sauce topped off with bacon",
        price= 22.99,
        image_url= "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1024,format=auto,quality=50/https://cdn.doordash.com/media/photos/77ca023e-3905-4f44-aa8c-c837ad7ac512-retina-large-jpeg"
    )
    item22 = Item(
        restaurant_id=11,
        name='Plain Cheese 18" Pizza',
        description="Classic 18 inch pizza with marinara sauce",
        price= 16.99,
        image_url= "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1024,format=auto,quality=50/https://cdn.doordash.com/media/photos/d7196a0f-6f14-4b61-8dcb-7219c44e8056-retina-large-jpeg"
    )
    item23 = Item(
        restaurant_id=12,
        name='Crispy Chicken Poblano',
        description="Extra Crisp Romaine + Shredded Kale, Crispy Chicken, Grated Cotija, Hass Avocado, Roasted Corn, Overnight Pickled Onions, Crunchy Tortillas, Smoky Poblano Ranch (Homemade) + Fresh Lime",
        price= 14.29,
        image_url= "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1024,format=auto,quality=50/https://cdn.doordash.com/media/photosV2/95c0386c-589d-41b7-b979-e9058c462722-retina-large.jpeg"
    )
    item24 = Item(
        restaurant_id=12,
        name='Cilantro Lime Chicken',
        description="Regenerative Brown Rice + Shredded Kale, Roasted Corn, Crumbled Feta, Braised Chicken Thigh, Stacy's® Pita Chips, Overnight Pickled Onions, Black Lentils, Hass Avocado, Cilantro Lime Vinaigrette (Homemade)",
        price= 16.99,
        image_url= "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1024,format=auto,quality=50/https://cdn.doordash.com/media/photosV2/fef2796b-e61f-405a-87ef-375295382ec2-retina-large.jpeg"
    )
    item25 = Item(
        restaurant_id=13,
        name='Pain Au Chocolat',
        description="Dark chocolate sticks rolled up inside croissant pastry dough",
        price= 4.19,
        image_url= "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1024,format=auto,quality=50/https://cdn.doordash.com/media/photos/109a0ee4-98e0-445b-b9c6-00ad443a520a-retina-large-jpeg"

    )
    item26 = Item(
        restaurant_id=13,
        name='Ham & Gruyère Croissant',
        description="Ham and gruyère cheese croissant topped with toasted sesame seeds",
        price= 4.99,
        image_url= "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1024,format=auto,quality=50/https://cdn.doordash.com/media/photos/78a23f11-c1d6-4c31-8975-9ef1ba826617-retina-large-jpeg"
    )
    item27 = Item(
        restaurant_id=14,
        name='Birria Quezadilla + 8 oz Consome',
        description="flour Tortilla, Birria Beef cheese Sour Cream onion, cilantro. lettuce and tomato ,on side ,+8 oz Consome included",
        price= 14.99,
        image_url= "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1024,format=auto,quality=50/https://cdn.doordash.com/media/photosV2/7524cef5-d2e7-46f5-9cc9-73c81da72ac9-retina-large.JPG"
    )
    item28 = Item(
        restaurant_id=14,
        name='Esquites',
        description="Ham and gruyère cheese croissant topped with toasted sesame seeds",
        price= 7.99,
        image_url= "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1024,format=auto,quality=50/https://cdn.doordash.com/media/photosV2/aab0d4e5-71fe-4bd7-a4ef-8eb08e25573b-retina-large.JPG"
    )
    item29 = Item(
        restaurant_id=15,
        name='Orange Flavored Beef',
        description="Crispy outside tender inside, chunks of been in orange flavored sauce",
        price= 17.95,
        image_url= "https://www.kitchensanctuary.com/wp-content/uploads/2018/05/Crispy-Orange-Beef-square-FS-67.jpg"
    )
    item30 = Item(
        restaurant_id=15,
        name='Crispy Double Delight',
        description="Jumbo shrimp and Crispy Chicken with longan in lemon flavored sweet and sour sauce",
        price= 18.99,
        image_url= "https://whats4dinnersolutions.files.wordpress.com/2015/11/dsc_1303-1600x1060.jpg"
    )
    item31 = Item(
        restaurant_id=16,
        name='Chicken Souvlaki Plate',
        description="Herbed marinated Mary's chicken breast cubes.",
        price= 15.95,
        image_url= "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1024,format=auto,quality=50/https://cdn.doordash.com/media/photosV2/48acb7a2-9aed-430b-9b8c-bcee489076da-retina-large.jpeg"
    )
    item32 = Item(
        restaurant_id=16,
        name='Mix Combo Grill',
        description="Kofte,chicken souvlaki,beef shish kebab,lamb and beef gyros.",
        price= 16.99,
        image_url= "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1024,format=auto,quality=50/https://cdn.doordash.com/media/photosV2/b270e769-ddda-4b01-a064-9208a66c52f0-retina-large.jpeg"
    )
    item33 = Item(
        restaurant_id=17,
        name='DOUBLE CLASSIC SMASH® BURGER',
        description="Double Certified Angus Beef, American cheese, lettuce, tomatoes, red onions, pickles, Smash Sauce®, ketchup, toasted bun.",
        price= 11.99,
        image_url= "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1024,format=auto,quality=50/https://cdn.doordash.com/media/photosV2/d42e0032-4b95-4829-8ec1-1dc483c71af1-retina-large.jpg"
    )
    item34 = Item(
        restaurant_id=17,
        name='DOUBLE COLORADO BURGER',
        description="Double Certified Angus Beef, pepper jack cheese, melted cheddar cheese, grilled Anaheim, chiles, lettuce, tomatoes, mayo, toasted spicy chipotle bun.",
        price= 13.99,
        image_url= "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1024,format=auto,quality=50/https://cdn.doordash.com/media/photosV2/4ea6b04b-9d02-4b67-a3d3-1e103929dc6d-retina-large.jpg"
    )
    item35 = Item(
        restaurant_id=18,
        name='Shrimp Tempura Roll',
        description="Shrimp tempura, avocado, cucumber caviar in eel sauce.",
        price= 9.00,
        image_url= "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1024,format=auto,quality=50/https://cdn.doordash.com/media/photosV2/5ad93933-6799-4d4d-a90c-10190a51afaf-retina-large.jpg"
    )
    item36 = Item(
        restaurant_id=18,
        name='Godzilla Roll',
        description="Deep-fried spicy tuna, avocado with spicy mayo and eel sauce scallion, masago on top.",
        price= 13.25,
        image_url= "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1024,format=auto,quality=50/https://cdn.doordash.com/media/photosV2/18a10921-79c0-4bc8-9e8c-5ac26d1c9c53-retina-large.jpg"
    )
    item37 = Item(
        restaurant_id=19,
        name='Carne Asada Fries',
        description="Crispy herb fries, steak, onions, melted cheese, pico de gallo, cotija cheese, salsa verde, sour cream & guacamole",
        price= 14.99,
        image_url= "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1024,format=auto,quality=50/https://cdn.doordash.com/media/photosV2/323fdc4b-e8cc-4ba3-a02c-9e2bc24d743f-retina-large.jpg"
    )
    item38 = Item(
        restaurant_id=19,
        name='Surf N Turf Burrito',
        description="Seared shrimp, steak & onions, rice, black beans, pico de gallo salsa verde & guacamole",
        price= 15.50,
        image_url= "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1024,format=auto,quality=50/https://cdn.doordash.com/media/photosV2/3a588fa4-ecdb-40a4-ab6a-8ecc2c458c85-retina-large.jpg"
    )
    item39 = Item(
        restaurant_id=20,
        name='Spanikopita',
        description="Vegetarian. Spinach, leeks, dill, scallions, and feta cheese in phyllo dough.",
        price= 17.95,
        image_url= "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1024,format=auto,quality=50/https://cdn.doordash.com/media/photos/4728412b-4983-43de-a527-9abcfdaa47ab-retina-large-jpeg"
    )
    item40 = Item(
        restaurant_id=20,
        name='Greek Salad',
        description="Romaine lettuce, red onion, tomato, green peppers, stuffed grape leaves, kalamata olives, and imported Greek feta. Comes with pita bread.",
        price= 14.95,
        image_url= "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1024,format=auto,quality=50/https://cdn.doordash.com/media/photosV2/42f60f47-895a-4ba2-8c18-1e8a92281bdd-retina-large.jpg"
    )

    db.session.add(item1)
    db.session.add(item2)
    db.session.add(item3)
    db.session.add(item4)
    db.session.add(item5)
    db.session.add(item7)
    db.session.add(item8)
    db.session.add(item9)
    db.session.add(item10)
    db.session.add(item11)
    db.session.add(item12)
    db.session.add(item13)
    db.session.add(item14)
    db.session.add(item15)
    db.session.add(item17)
    db.session.add(item18)
    db.session.add(item19)
    db.session.add(item20)
    db.session.add(item21)
    db.session.add(item22)
    db.session.add(item23)
    db.session.add(item24)
    db.session.add(item25)
    db.session.add(item27)
    db.session.add(item28)
    db.session.add(item29)
    db.session.add(item30)
    db.session.add(item31)
    db.session.add(item32)
    db.session.add(item33)
    db.session.add(item34)
    db.session.add(item35)
    db.session.add(item37)
    db.session.add(item38)
    db.session.add(item39)
    db.session.add(item40)
    db.session.commit()

def undo_items():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.items RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM items"))

    db.session.commit()
