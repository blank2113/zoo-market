import React from 'react';
import logof from '../../assets/logof.svg';
import { Link, Routes,Route } from "react-router-dom";
import AdminPage from "../../pages/AdminPage";
import LoginPage from "../../pages/LoginPage";
import './footer.css';

function Footer() {
  return (
    <footer className='footer'>
        <div className='footer-inner container'>
            <p className='footer-inner__text'>© 2022 ORCUS. Все права защищены</p>
            <div className='footer-inner__image'>
      <Link to="/login"><img src={logof} alt='logo'/></Link>
       <Routes>
        <Route path="/login/*" element={LoginPage}/>
        <Route path="/admin" element={AdminPage}/>
      </Routes> 
                
            </div>
        </div>
    </footer>
  )
}

export default Footer