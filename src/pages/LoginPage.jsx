import React, { useState } from 'react';
import { Link, Routes,Route, Navigate, useNavigate } from "react-router-dom";
import AdminPage from './AdminPage';



function LoginPage() {
  const [ad, getAd] = useState('');
  const PASSWORD = '12345';
  let navigate = useNavigate();
  const goAdmin = () => {
    navigate("/admin");
  };
  return (
    <div>
        <h2>asdasd
        asdasdasd</h2>
        
       <input type="password" name="password" onChange={e=> getAd(e.target.value)}/>
       <button onClick={()=> ad === PASSWORD ? goAdmin() : null}>enter</button>
    </div>
  )
}

export default LoginPage