import React from 'react';
import './topContent.css';
import img from '../../assets/img1.png';

function TopContent() {
  return (
    <section className='top-content'>
        <div className='top-content-inner container'>
        <div className="top-content-text">
          <h1 className="title">
            Ваш лучший зоомагазин с расширенным ассортиментом
          </h1>
          <p className="text">
            Онлайн-магазин для домашних животных - удобное решение экономии
            времени
          </p>
          <a href="#as" className="button-see">
            Посмотреть товары
          </a>
        </div>
        <div className="top-content-images">
            <img src={img} alt="img"/>
        </div>
        </div>
    </section>
  )
}

export default TopContent