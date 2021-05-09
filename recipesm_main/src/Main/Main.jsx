import React from 'react'
 import './Main.css'
 import {Switch , Route} from 'react-router-dom';

 import Explore from '../Main/Content/Explore';
import Dish from '../Main/Content/Dish';
import Contact from '../Main/Content/Contact';
import About from '../Main/Content/About';
import Profile from '../Main/Content/Profile';
function Main() {
    return (
        <div className='mainContent'>
              <Switch>
                <Route exact path='/' component={Explore}/> 
                <Route  path='/Dish' component={Dish} />
                <Route path='/Contact' component={Contact}/> 
                <Route path='/About' component={About}/>
                <Route path='/Profile' component={Profile}/>
            </Switch>
        </div>
    )
}
export default Main
