import React from 'react';
import './nav.css';

function Nav({ active, setActive }) {
  return (
    <div className={ active ? 'nav active' : 'nav'} onClick={() => setActive(false) }>
        <div className='blur'/>
        <div className='nav-content' onClick={e => e.stopPropagation()}>
        <ul className="nav-content__list list" >
        <li className="list__item">
          <a href="#home" className="list__link">
            Главная
          </a>
        </li>
        <li className="list__item">
          <a href="#goods" className="list__link">
            Товары
          </a>
        </li>

        <li className="list__item">
          <a href="#about" className="list__link">
            О нас
          </a>
        </li>

        <li className="list__item">
          <a href="#contacts" className="list__link">
            Контакты
          </a>
        </li>
      </ul>
        </div>
    </div>
  )
}

export default Nav