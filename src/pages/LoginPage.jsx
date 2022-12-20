import React, { useState } from "react";
import { Link, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import AdminPage from "./AdminPage";
import logo2 from '../assets/logo2.svg';
import "./loginPage.css";

function LoginPage() {
  const [ad, getAd] = useState("");
  const PASSWORD = "12345";
  let navigate = useNavigate();
  const goAdmin = () => {
    navigate("/admin");
  };
  return (
    <div className="login-page">
      <div className="login-page__inner container">
        <div className="login-inner__logo">
          <img src={logo2}/>
          <p className="login-inner__logo-title">black bee|zoomarket</p>
        </div>
        <div className="login-page__inner-wrapper">
          <h3>Авторизация</h3>

          <input
            type="password"
            name="password"
            placeholder="Введите пароль"
            onChange={(e) => getAd(e.target.value)}
          />
          <button onClick={() => (ad === PASSWORD ? goAdmin() : null)}>
            Войти
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
