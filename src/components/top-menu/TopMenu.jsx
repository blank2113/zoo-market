import React from "react";
import "./topMenu.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function TopMenu() {
  return (
    <div className="top-menu">
      <div className="top-menu-inner">
        <div className="top-menu-inner__btns">
          <button className="add">
          <FontAwesomeIcon icon={faPlus}/>
          Добавить</button>
          <button className="delete">
          <FontAwesomeIcon icon={faXmark}/>
          Удалить</button>
        </div>
      </div>
    </div>
  );
}

export default TopMenu;
