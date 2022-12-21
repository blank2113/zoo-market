import React from 'react';
import './asideMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faCoins } from '@fortawesome/free-solid-svg-icons'
import { faPercent } from '@fortawesome/free-solid-svg-icons'
import ListItem from './listItem/ListItem';



function AsideMenu({click,setClick}) {

 
  const data5 =[{
    id:1,
    name:'Список товаров',
    icon: faList
  },{
    id:2,
    name:' Лучшие товары',
    icon: faCoins
  },{
    id:3,
    name:' Товары по скидке',
    icon: faPercent
  }]
   console.log(click);
  return (
    <div className='aside-menu'>
        <div className='aside-menu-inner'>
          <ul className='aside-menu-inner__nav'>
           {data5.map(item => <ListItem item={item} key={item.id} click={click} setClick={setClick}/>)}
          </ul>
        </div>
    </div>
  )
}

export default AsideMenu