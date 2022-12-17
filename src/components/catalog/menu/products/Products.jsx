import React, { useEffect, useState } from "react";
import './products.css';

function Products({ name }) {
  const [data2, getData2] = useState([]);
  const getList = () => {
    fetch("../../../../data/products.json")
      .then((res) => res.json())
      .then((result) => getData2(result));
  };
  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="products">
      {data2
        .filter((el) => el.animal === name)
        .map((item) => (
          <div className="products-inner ">
            <h3 className="card-title">{item.type}</h3>
            <div className="card-wrapper ">
              {item.items.map((el) => (
                <li className="card">
                <div className="card-image"></div>
                <p className="card-inner__title">{el.name}</p>
                <p className={el.status === "В наличии"? "card-inner__status active" : "card-inner__status" }>{el.status}</p>
                </li>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}

export default Products;
