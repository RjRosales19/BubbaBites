from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Length, NumberRange

class ReviewForm(FlaskForm):
    text = StringField('text', validators=[DataRequired(), Length(min=10, max=100, message='Must be atleast 10 and less than 100 characters')])
    star_rating = IntegerField('star_rating', validators=[DataRequired(), NumberRange(min=1, max=5, message='Stars must be from 1 to 5')])
