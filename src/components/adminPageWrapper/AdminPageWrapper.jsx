import React, { useState } from "react";
import "./adminPageWrapper.css";
import AsideMenu from "../asideMenu/AsideMenu";
import TopMenu from "../top-menu/TopMenu";
import animals from "../../data/animals.json";
import products from "../../data/products.json";
import bestProducts from "../../data/bestProducts.json";
import bestSales from "../../data/bestSales.json";
import Table from "../table/Table";
import List from "../list/List";

function AdminPageWrapper() {
  const [click, setClick] = useState(1);
  const data = animals;
  const data2 = products;
  const data3 = bestProducts;
  const data4 = bestSales;
  return (
    <div className="admin-page-wrapper">
      <AsideMenu click={click} setClick={setClick} />
      <div className="block">
        {click === 1 ? <List data={data} /> : null}
        <Table data={click === 1 ? data2 : click === 2 ? data3 : click === 3 ? data4 : null} />
      </div>
      <TopMenu />
    </div>
  );
}

export default AdminPageWrapper;
