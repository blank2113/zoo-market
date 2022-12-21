import React from "react";
import "./table.css";
import TBody from "./tBody/TBody";
import THead from "./tHead/THead";

function Table({ data,name }) {
  const aas = data;
  return (
    <div className="table">
      <table>
        <THead dat={aas} />
        <TBody dat={aas} name={name}/>
      </table>
    </div>
  );
}

export default Table;
