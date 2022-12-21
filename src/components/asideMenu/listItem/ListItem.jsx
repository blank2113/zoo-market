import React from 'react'
import './listItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function ListItem({item,click, setClick}) {

  return (
    <div className='list-item'>
        <div className={click === item.id? "list-item__heading active": "list-item__heading"} onClick={()=> setClick(item.id)}>
        <FontAwesomeIcon icon={item.icon} />
        <p>{item.name}</p>
        </div>
    </div>
  )
}

export default ListItem