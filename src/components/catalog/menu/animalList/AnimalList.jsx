import React from "react";
import "./animalList.css";

function AnimalList({ data, name, getName }) {
  return (
    <div className="animalList">
      <ul className="animal-list">
        {data.map((item) => (
          <li key={item.id} className={
              name === item.name ? "animal-list__item active" : "anima-list__item"
            } onClick={() => getName(item.name)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AnimalList;
