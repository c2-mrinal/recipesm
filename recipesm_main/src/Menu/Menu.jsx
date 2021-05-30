import React, {useState} from 'react';
import * as Icon from 'react-icons/fa';
import {CgProfile} from 'react-icons/cg';
import {BsFillHouseDoorFill} from "react-icons/bs";
import {MdImportContacts} from "react-icons/md";
import {BiDish} from 'react-icons/bi';
import {NavLink} from 'react-router-dom';

import './Menu.css';
import Login from './Login';
let urlIS= window.location.pathname
console.log(urlIS);

function Menu() {
    const [loginBox, setLoginBox] = useState(false);
  
    return (
        <div>
           <div className='logoFixed'>
               <div> <h3>Recipesm</h3></div>
               <div>
               <form action="" class="search-bar">
	            <input type="search" name="search" pattern=".*\S.*" required />
	            <button class="search-btn" type="submit"><span>Search</span></button>
                </form>
               </div>
               <button onClick={()=>{setLoginBox(loginBox=>!loginBox)}}>Login/Register </button>
              {loginBox && <Login></Login>}
            </div> 
        <ul className='navbarUL'>
        <li><NavLink  to="/Explore"><BsFillHouseDoorFill  size='36'/>Explore</NavLink></li>
        <li><NavLink  to="/Dish"><BiDish size='36'/>Dish</NavLink></li>
        <li><NavLink  to="/Contact"><MdImportContacts size='36'/>Contact</NavLink></li>
        <li><NavLink  to="/About"><Icon.FaAmilia size='36'/>About</NavLink></li>
        <li><NavLink  to="/Profile"><CgProfile size='36' />Profile</NavLink></li>
        </ul>
        </div>
    )
}

export default  Menu;