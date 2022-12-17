import React from 'react';
import logof from '../../assets/logof.svg';
import './footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-inner container'>
            <p className='footer-inner__text'>© 2022 ORCUS. Все права защищены</p>
            <div className='footer-inner__image'>
                <img src={logof} alt='logo'/>
            </div>
        </div>
    </div>
  )
}

export default Footer