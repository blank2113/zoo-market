import React, { useEffect, useState } from "react";
import './menu.css';
import AnimalList from "./animalList/AnimalList";
import Products from "./products/Products";

function Menu() {
  const [data, setData] = useState([]);
  const [name, getName] = useState('Собаки');
  console.log(name);
  const getData = () => {
    fetch("../../../data/animals.json")
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (result) {
        setData(result);
      });
  };

  useEffect(() => getData(), []);

  return (
    <div className="menu">
      <AnimalList data={data} name={name} getName={getName}/>
      <Products name={name}/>
    </div>
  );
}

export default Menu;
