import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';

export default function Demo_useref() {
    const refelement = useRef();  
    const [name , setName] = useState("Jay")
    console.log(refelement);
    function reset(){
     setName("")
     refelement.current.focus(alert('data is require'))

    }
    function handelinput(){
        refelement.current.style.color="red"  
        refelement.current.style.backgroundColor="lime"
        refelement.current.value="data submited"
    }
    return (
    <>
    <h1>learn use ref in react </h1>
     <input ref={refelement} type='text' value={name} onChange={(e)=> setName(e.target.value)}></input> <br/>
     <button onClick={reset}>reset</button>
     <button onClick={handelinput}>submit handel</button>
    </>

  );
}
