from flask import render_template
from flask_appbuilder.models.sqla.interface import SQLAInterface
from flask_appbuilder import ModelView, ModelRestApi

from . import appbuilder, db
from flask_appbuilder import AppBuilder, expose, BaseView, has_access
from sqlalchemy.ext.automap import automap_base
from  .models import *

from flask_appbuilder import SimpleFormView
from flask_appbuilder.forms import DynamicForm
from wtforms import Form, StringField
from wtforms.validators import DataRequired
from flask_appbuilder.fieldwidgets import BS3TextFieldWidget
from flask_babel import lazy_gettext as _
from flask import flash
from flask import redirect

from flask import g


"""
    Create your Model based REST API::

    class MyModelApi(ModelRestApi):
        datamodel = SQLAInterface(MyModel)

    appbuilder.add_api(MyModelApi)


    Create your Views::


    class MyModelView(ModelView):
        datamodel = SQLAInterface(MyModel)


    Next, register your Views::


    appbuilder.add_view(
        MyModelView,
        "My View",
        icon="fa-folder-open-o",
        category="My Category",
        category_icon='fa-envelope'
    )
"""

"""
    Application wide 404 error handler
"""
Base = automap_base()
Base.prepare(db.engine,reflect=True)
Abuser = Base.classes.ab_user 
User = Base.classes.user

@appbuilder.app.errorhandler(404)
def page_not_found(e):
    return (
        render_template(
            "404.html", base_template=appbuilder.base_template, appbuilder=appbuilder
        ),
        404,
    )


class ContactUser(BaseView):
    route_base = "/"
    
    @expose('/currentuser')
    @has_access
    def curuser(self):
        data = {"user":g.user}
        raise Exception( data)

    @expose('/loginuser')
    @has_access
    def loginuser(self):
        # user = db.Table('ab_user',db.metadata,autoload=True,autoload_with = db.engine)
        # data = db.session.query(user).all()

        data = db.session.query(Abuser).all()
        # data ='shruti'
        l = []
        for i in data:
            user.append({"username":i.username,"email":i.email})

        return {"users":user}

    @expose('/data/show')
    @has_access
    def fun(self):
        data2 = db.session.query(User).all()
        # print("data2===",data2)
        data = 'data is here'
        rdata={}
        for i in data2:
            rdata[i.user_id] = i.user_name
        return rdata

    @expose('/data/insert')
    @has_access
    def insertfun(self):
        # data2 = db.session.query(User).all()
        new_user = User(user_name='new',email_id='new@gmail.com',gender='Male',age=24)
        db.session.add(new_user)
        db.session.commit()

        data2 = db.session.query(User).all()
        data = {'data':data2}
        return data
        # return redirect(url_for('func'))


class MyForm(DynamicForm):
    username = StringField(('Username'),
        description=('Enter your username'),
        validators = [DataRequired()], widget=BS3TextFieldWidget())
    email = StringField(('Email'),
        description=('Enter you email id'), widget=BS3TextFieldWidget())
    password = StringField(('Password'),
        description = ('Password'),widget=BS3TextFieldWidget())


class MyFormView(SimpleFormView):
    form = MyForm
    form_title = 'This is New User view'
    message = 'My form submitted'

    def form_get(self, form):
        form.username.data = 'This was prefilled'

    def form_post(self, form):
        # post process form
        if form.email.data == 'guest@gmail.com':
            flash('Shruti cant do this!!!','info')
        else:
            flash(self.message, 'info')
            # return redirect(self.get_redirect())
        # new_user = Abuser(username = form.username.data,email=form.email.data,password=form.password.data)
        new_user = User(user_name = form.username.data,email_id=form.email.data,password=form.password.data)
        db.session.add(new_user)
        db.commit()
        return {'newuser':new_user.user_name}
        return redirect(self.get_redirect())

class Usermodel(ModelView):
    datamodel = SQLAInterface(User)

    label_columns = {'user_name':'User Name'}
    list_columns = ['user_id','user_name','email_id']

    add_columns = ['user_name','email_id','password']

    edit_columns = ['user_name','email_id','password']

    show_fieldsets = [
        (
            'Summary',
            {'fields': ['user_id', 'user_name']}
        ),
        (
            'Personal Info',
            {'fields': ['email_id'], 'expanded': False}
        ),
    ]
    data = db.session.execute("select * from contact")     


class Recipemodel(ModelView):
    datamodel = SQLAInterface(Recipes)

    label_columns = {'recipe_name':'Recipe Name'}
    list_columns = ['recipe_id','recipe_name']

    add_columns = ['recipe_id','recipe_name','active_time','total_time','ingredients','equipments','steps']
    
    edit_column = ['recipe_id','recipe_name','active_time','total_time','ingredients','equipments','steps']
    
    show_fieldsets = [
        (
            'Summary',
            {'fields': ['recipe_id', 'recipe_name']}
        ),
        (
            'Personal Info',
            {'fields': ['ingredients','equipments','steps'], 'expanded': False}
        ),
    ]
    data = db.session.execute("select * from contact")     

class Ratingmodel(ModelView):
    datamodel = SQLAInterface(Rating)
    list_columns = ['recipe_id']

    add_columns = ['recipe_id','rating','saved','comments']
    
    edit_column = ['recipe_id','rating','saved','comments']
    

db.create_all()


appbuilder.add_view(ContactUser,"User Groups",href='/data/show', icon = "fa-folder-open-o", category = "Users", category_icon = "fa-envelope")

appbuilder.add_view(Usermodel,"List users",icon = "fa-envelope",category = "Listusers")
appbuilder.add_view(Recipemodel,"List Recipes",icon = "fa-envelope",category = "ListRecipes")
appbuilder.add_view(Ratingmodel,"List Rating",icon = "fa-envelope",category = "ListRating")

# appbuilder.add_view(MyFormView, "New User", icon="fa-group", label=_('New User'),
#                      category="New user", category_icon="fa-cogs")
