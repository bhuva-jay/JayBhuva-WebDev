import React , { useState } from 'react'

export default function LChild(props) {
    const [name, setName] = useState()
    function hanndelSubmit(e){
       e.preventDefault();
       props.getData(name)
       
    }
  return (
    <>
     <form onSubmit={hanndelSubmit}>
        <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <button >Submit</button> 
     </form>
     </>
  )
}
