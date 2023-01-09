import React from 'react'
import {LOGO_IMG_SRC} from './config';

export default function Header() {
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
                <li><input type = 'text' placeholder='search here...'/><span> Search</span></li>
                <li>Offers</li>
                <li>Help</li>
                <li>Cart</li>
            </ul>
        </div>

    </div>
  )
}
