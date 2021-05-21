from flask_appbuilder import Model
from sqlalchemy import Column, Integer, String, ForeignKey,Boolean,Numeric
from sqlalchemy.orm import relationship

"""

You can use the extra Flask-AppBuilder fields and Mixin's

AuditMixin will add automatic timestamp of created and modified by who


"""

class User(Model):
    __tablename__ = 'user'
    # id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, primary_key=True, autoincrement=True)
    user_name = Column(String(50))
    email_id = Column(String(50), unique = True)
    password = Column(String(50))
    profile_photo = Column(String(50))       # how to store image in database
    gender = Column(String(50))
    age = Column(Integer)
    # created_on = Column(DateTime, default= datetime.now())
    

    def __repr__(self):
        return self.user_id
    
class Recipes(Model):
    __tablename__ = 'recipes'
    # id = Column(Integer, primary_key=True, autoincrement=True)
    recipe_id = Column(Integer, primary_key=True, autoincrement=True)
    recipe_name = Column(String(50))
    image = Column(String(50))
    created_by = Column(Integer,ForeignKey('user.user_id'))
    active_time = Column(Numeric(5,2))   # no of hrs
    total_time = Column(Numeric(5,2))  # no of hrs
    yieldto = Column(Integer)
    ingredients = Column(String(200))
    equipments = Column(String(200))
    nutritions = Column(String(200))
    steps = Column(String(5000))
    type = Column(String(50))   #veg,nonveg,eggatarian, vegan.... etc
    cuisine = Column(String(50))
    occasion = Column(String(50))
    serve_time  = Column(String(50))  #lunch , dinner, breakfast, all
    taste  = Column(String(50))
    video_link = Column(String(50))
    # created_on = Column(DateTime, default= datetime.now())
    
    def __repr__(self):
        return self.recipe_id


class Rating(Model):
    __tabelname__ = 'rating'
    id = Column(Integer, primary_key=True, autoincrement=True)
    recipe_id = Column(Integer,ForeignKey('recipes.recipe_id'))
    rating = Column(Integer)    # Star - 1,2,3,4,5
    saved = Column(Boolean, default =False)
    comments = Column(String(150))
    user_id = Column(Integer,ForeignKey('user.user_id'))
    # created_on = Column(DateTime, default= datetime.now() )
    
