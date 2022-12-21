import React from "react";
import './list.css'

function List({ data }) {
  return (
    <div className="admin-list">
      <ul>
        {data.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
