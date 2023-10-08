from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Length

class RestaurantForm(FlaskForm):
    name = StringField('name', validators=[DataRequired(), Length(min=4, max=30, message='Name must be atleast 4 and less than 30 characters')])
    address = StringField('address', validators=[DataRequired(), Length(min=5, max=35, message='Address must be atleast 5 and less than 30 characters')])
    state = StringField('state', validators=[DataRequired(), Length(min=2, max=20, message='State must be atleast 2 and less than 20 characters')])
    city = StringField('city', validators=[DataRequired(), Length(min=4, max=20, message='City must be atleast 4 and less than 20 characters')])
    hours = StringField('hours', validators=[DataRequired(), Length(min=4, max=25, message='Must be atleast 4 and less than 25 characters')])
    image_url = StringField('image_url', validators=[DataRequired()])
