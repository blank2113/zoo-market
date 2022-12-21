import React from "react";
import './list.css'

function List({ data, animal, setAnimal }) {
  return (
    <div className="admin-list">
      <ul>
        {data.map((item) => (
          <li onClick={()=> setAnimal(item.name)}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
