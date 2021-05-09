import React from 'react';
import * as Icon from 'react-icons/fa';
import {CgProfile} from 'react-icons/cg';
import {BsFillHouseDoorFill} from "react-icons/bs";
import {MdImportContacts} from "react-icons/md";
import {BiDish} from 'react-icons/bi';
import {Link} from 'react-router-dom';

import './Menu.css';


function Menu() {
    return (
        <div>
           <div className='logoFixed'></div> 
        <ul>
        <li><Link  to="/"><BsFillHouseDoorFill  size='36'/>Explore</Link></li>
        <li><Link  to="/Dish"><BiDish size='36'/>Dish</Link></li>
        <li><Link  to="/Contact"><MdImportContacts size='36'/>Contact</Link></li>
        <li><Link  to="/About"><Icon.FaAmilia size='36'/>About</Link></li>
        <li><Link  to="/Profile"><CgProfile size='36' />Profile</Link></li>
      
        </ul>
        </div>
    )
}

export default  Menu;