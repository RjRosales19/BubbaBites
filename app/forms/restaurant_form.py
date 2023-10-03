from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class RestaurantForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    address = StringField('address', validators=[DataRequired()])
    state = StringField('state', validators=[DataRequired()])
    city = StringField('city', validators=[DataRequired()])
    hours = StringField('hours', validators=[DataRequired()])
    image_url = StringField('image_url', validators=[DataRequired()])
