import React from 'react';
import './navigationMenu.css';
import logo2 from '../../assets/logo2.svg';



function NavigationMenu() {
    const date = new Date();
    const day = date.toLocaleString("ru-RU",{day:"2-digit"});
    const month = date.toLocaleString("ru-RU", {
        month: "long",
      });
      const year =date.getFullYear();
      const hours = date.getHours();
      const minutes = date.getMinutes();
  return (
    <div className='navigation-menu'>
        <div className='navigation-menu-inner container'>
            <div className='navigation-menu-inner__logo'>
                <img src={logo2} alt='nav-logo'/>
                <p className='navigation-menu-inner__title'>black bee | zoomarket</p>
            </div>
            <div className='navigation-menu-inner__date'>
                <span>{day}</span>
                <span>{month}</span>
                <span>{year}</span>
            </div>
        </div>
    </div>
  )
}

export default NavigationMenu