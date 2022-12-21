import React from "react";
import "./table.css";
import TBody from "./tBody/TBody";
import THead from "./tHead/THead";

function Table({ data }) {
  const aas = data;
  return (
    <div className="table">
      <table>
        <THead dat={aas} />
        <TBody dat={aas} />
      </table>
    </div>
  );
}

export default Table;
