import React, { useEffect, useState } from 'react'


import Demo_prop_drillingA from './Demo_prop_drillingA'





export default function App() {

  const[name , setName] = useState("jaybhuva") 
  const [ gen]

  
  return (
    <>
     <Demo_prop_drillingA  name={name}/>  
    </>
  )
}


