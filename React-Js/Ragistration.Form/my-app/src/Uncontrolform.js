import React, { useRef } from 'react'

export default function Uncontrolform() {
    const refObject = useRef()
    console.log(refObject);
    function handelSubmit(e){
        e.preventDefault()
      console.log((refObject.current.value).toUpperCase());
    }
    
  return (
    <div className='container ' >
        <form onSubmit={handelSubmit}>
        <h1>FORM UNCONTROL COMPONENTS</h1>
       <label>First name:</label><br/>
       <input  type='text' ref={refObject}/><br/>
       <button>submit</button> <br/>
    </form>
    {/* aa rite react ma image levai path this public ma image m uki ne pachi path leva no  */}
       <img className='mt-3' src='./download.jpeg'/>
    </div>
  )
}
