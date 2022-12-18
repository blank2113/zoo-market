import React from 'react';
import telegram from "../../assets/telegram.svg";
import insta from "../../assets/insta.svg";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import "./contacts.css";

function Contacts() {
    const defaultState = {
        center: [41.250029, 69.302070],
        zoom: 16,
      };
  return (
    <section className="contacts">
      <div className="contacts-inner container">
        <h6 className="title">Где мы находимся?</h6>
        <div className="contacts-inner__wrapper">
          <div className="contacts-inner__content">
            <ul className="contacts-inner__content-list">
              <li className="contacts-inner__content-list-item">
                <p className='sub-title'>Адрес:</p>
                <p>г. Ташкент, Мирабадский р-н, улица Куйлюк, дом 11</p>
              </li>
              <li className="contacts-inner__content-list-item">
                <p className='sub-title' >Наш номер телефона:</p>
                <p>+99897 777 77 77</p>
              </li>
              <li className="contacts-inner__content-list-item">
                <p className='sub-title'>Мы в соц. сетях:</p>
                <div className="socials">
                  <img src={telegram} alt="telegram" />
                  <img src={insta} alt="telegram" />
                </div>
              </li>
            </ul>
          </div>
          <div className="map">
            <YMaps className="ymap" style={{ width: '600px', height: '240px'}}>
              <Map defaultState={defaultState} style={{ width: '600px', height: '240px' }} className="as">
                <Placemark geometry={[41.250029, 69.302070]} />
              </Map>
            </YMaps>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts