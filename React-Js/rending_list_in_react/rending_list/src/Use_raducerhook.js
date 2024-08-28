import React, { Fragment, useReducer } from 'react'

const initialstate= 0;
const reducer =(state,action)=>{
    switch(action){
        case "Increment":   
        return state+1;
        case "decrement":  
        return state-1;
        default:
            return state;

    }
}

export default function Use_raducerhook() {
     const [count , dispatch] = useReducer(reducer, initialstate)
  return (
   <Fragment>
    <div className='app'>
    <div>count={count} </div>
     <button onClick={()=> dispatch("Increment")}>increment</button>
     <button onClick={()=> dispatch("decrement")}>decriment</button>

    </div>
   </Fragment>
  )
}
