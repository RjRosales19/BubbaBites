from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class ReviewForm(FlaskForm):
    text = StringField('text', validators=[DataRequired()])
    star_rating = IntegerField('star_rating', validators=[DataRequired()])
