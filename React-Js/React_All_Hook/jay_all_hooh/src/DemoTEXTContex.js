import React, { useState } from 'react';
import  {createContext} from 'react'
import D_child1 from './D_child1'





// create provider consumer 
const data  = createContext()
const data1 = createContext()

 function DemoTEXTContext() {
  // const name = "jaybhuva"
  const[name , setName] = useState("jaybhuva")
  const[gender , setGender] = useState("male") 

  return (
    <>
    <data.Provider value={name}>
      <data1.Provider value={gender}>
           <D_child1/>  
     </data1.Provider>
     </data.Provider>
    </>
  )
}
export default DemoTEXTContext;
export{data, data1};











