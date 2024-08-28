import React, { useState } from 'react'

export default function State_array() {
    const [items ,setItems]=useState([])
    console.log(items);
    
    function additems(){
        setItems([...items , {
            id:items.length,
            value:Math.floor(100000+Math.random()*900000)
        }])
    }
  return (
    <div className='App'>
      <ol>
        {items.map(item=>(
            <li key={item.id}>{item.value}</li>
        ))}
      </ol>
      <button onClick={additems}>add items</button>
    </div>
  )
}
