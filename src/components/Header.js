// import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {LOGO_IMG_SRC} from './config';

export default function Header(props) {

//   const [searchText,setSearchText]  = useState("");

//   function changeTextListener(e){
//       setSearchText(e.target.value);
//       props.onClick(e.target.value);
//   }

  return (
    <div className='nav-bar'>
        <div className='nav-logo'>
            <a href='/'>
            <img className='nav-logo-img' alt="logo" src={LOGO_IMG_SRC}>
            </img>
            </a>
        </div>
        <div className='nav-list'>
            <ul>
                {/* <li><input type = 'text' value = {searchText} onChange={changeTextListener}  placeholder='search for food...'/><span> Search</span></li> */}
                <li> <Link className='nav-links'to="/">Home</Link></li>
                <li><Link className='nav-links' to="/about">About</Link></li>
                <li><Link className='nav-links' to="/contact">Contact</Link></li>
                <li><Link className='nav-links' to="/cart"><i className="fa-solid fa-cart-shopping"></i></Link></li>
            </ul>
        </div>

    </div>
  )
}
