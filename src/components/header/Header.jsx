import React, { useState } from 'react';
import './header.css';
import logo from '../../assets/logo2.svg';
import Nav from './nav/Nav';
import Burger from './burger/Burger';

function Header() {

    const [menuActive, setMenuActive] = useState(false);
  
  return (
    <div className='header'>
        <div className='header-inner  container'>
            <div className='header-inner__logo'>
                <img src={logo} alt="logo"/>
                <p className='header-inner__logo-title'>black bee | zoomarket</p>
            </div>
            <Nav active={menuActive} setActive={setMenuActive}/>
            <Burger active={menuActive} setActive={setMenuActive}/>
        </div>
    </div>
  )
}

export default Header