import React from "react";
import "./catalog.css";
import bar from "../../assets/bar.svg";
import Menu from "./menu/Menu";

function Catalog() {
  return (
    <div className="catalog">
      <div className="catalog-inner container">
        <h2 className="title">Лучшие зоотовары по лучшим ценам</h2>
        <div className="catalog-inner__heading">
          <p className="sub-title">Каталог</p>
          <img src={bar} alt="bar" />
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default Catalog;
