import React, { useCallback, useState } from 'react'
import USB_child from './USB_child'


export default function UseCALLback() {
    const [add , setAdd] = useState(0)
    const [count , setCount] = useState(0);
    const learn = useCallback(
        () =>{
            // some opration

        },[count]
    )
      return (
   <div>
       <h1>learn UseCALLback in react</h1>
       <USB_child learn={learn} count={count}/>
       <h1>{add}</h1>
       <button onClick={()=>setAdd(add+1)}>addition</button>
       <button onClick={()=> setCount(count +2)} >count</button>
       <h1>{count}</h1>
   </div>

  )
}
