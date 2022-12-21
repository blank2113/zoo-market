import React, { useState } from 'react'
import './categories.css'

function Categories({data}) {
const [ el , setEl] = useState(data[0].id)
console.log(el);
  return (
    <div className='categories'>
        {data.map(item => <li key={item.id} className={item.id === el? "categories-item active": "categories-item" } onClick={()=> setEl(item.id)}>{item.name}</li>)}
    </div>
  )
}

export default Categories