import React, { useEffect, useState } from "react";
import { Link, Routes,Route } from "react-router-dom";
import BestProducts from "../components/bestProduct/BestProducts";
import BestSales from "../components/bestSales/BestSales";
import Catalog from "../components/catalog/Catalog";
import Contacts from "../components/contacts/Contacts";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import TopContent from "../components/top-content/TopContent";
import AdminPage from "./AdminPage";
import LoginPage from "./LoginPage";
import './mainPage.css';

function MainPage() {

  return (
    <div className="main-page">
    <Header/>
    <TopContent/>
    <Catalog/> 
    <BestProducts/>
    <BestSales/>
    <Contacts/>
    <Footer/>
      {/* MainPage
      <Link to="/login">login</Link>
      {/* <Routes>
        <Route path="/login/*" element={LoginPage}/>
        <Route path="/admin" element={AdminPage}/>
      </Routes> */} 
    </div>
  );
}

export default MainPage;
