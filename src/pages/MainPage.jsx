import React from "react";
import { Link, Routes,Route } from "react-router-dom";
import Header from "../components/header/Header";
import TopContent from "../components/top-content/TopContent";
import AdminPage from "./AdminPage";
import LoginPage from "./LoginPage";
import './mainPage.css';

function MainPage() {
  return (
    <div>
    <Header/>
    <TopContent/> 
      MainPage
      <Link to="/login">login</Link>
      {/* <Routes>
        <Route path="/login/*" element={LoginPage}/>
        <Route path="/admin" element={AdminPage}/>
      </Routes> */}
    </div>
  );
}

export default MainPage;
