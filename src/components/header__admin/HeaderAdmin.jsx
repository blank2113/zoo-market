import React from 'react';
import './headerAdmin.css';
import logo2 from '../../assets/logo2.svg';


function HeaderAdmin() {
    const date = new Date();
    const day = date.toLocaleString("ru-RU",{day:"2-digit"});
    const month = date.toLocaleString("ru-RU", {
        month: "long",
      });
      const year =date.getFullYear();
  return (
    <div className='header-admin'>
        <div className='header-admin-inner'>
        <div className='header-admin-inner__logo'>
                <img src={logo2} alt='nav-logo'/>
                <p className='header-admin-inner__title'>black bee | zoomarket</p>
            </div>
            <div className='header-admin-inner__date'>
                <span>{day}</span>
                <span>{month}</span>
                <span>{year}</span>
            </div>
        </div>
    </div>
  )
}

export default HeaderAdmin