from flask_wtf import FlaskForm
from wtforms import StringField, FloatField
from wtforms.validators import DataRequired, Length, NumberRange

class ItemForm(FlaskForm):
    name = StringField('name', validators=[DataRequired(), Length(min=4, max=20, message='Name is required')])
    description = StringField('description', validators=[DataRequired(), Length(min=10, max=100, message='Description is required')])
    price = FloatField('price', validators=[DataRequired(),  NumberRange(min=1, max=100, message='Price is required')])
    image_url = StringField('image_url', validators=[DataRequired()])
