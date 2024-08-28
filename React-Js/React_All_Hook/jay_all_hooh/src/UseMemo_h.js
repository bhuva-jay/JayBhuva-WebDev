import React, { memo, useMemo, useState } from 'react'
import { data } from './DemoTEXTContex';

export default function UseMemo_h() {
    const [add , setAdd ] = useState(0);
    const [minus , setMinus] = useState (100);

    const multiplication = useMemo(
        function multiplay (){
            console.log("********************");
            return add*10; 
        },[add])
        return (
            <>
      <h1>learn usememo in react</h1>
        {multiplication}<br/>
        <button onClick={()=> setAdd(add+1)}>Addition</button>
        <span>{add}</span><br/>
        <button onClick={()=>setMinus(minus-1)}>Substraction</button>
        <span>{minus}</span><br/>

    </>  
)
}
