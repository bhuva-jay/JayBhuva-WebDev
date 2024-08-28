import React, { useState , useEffect } from 'react'
import { Container } from 'react-bootstrap'

export default function DemoEffecthook() {
    const [ count , setcounter] = useState(0)
    const [ data , setdata]=useState("shiv")
    useEffect(()=> {
        console.log("component mounted");
    },[data])//aaya pachad je empty array mekelo che ebatave che ke bija badha effect no chalavva hoy tyare pachad aa rite empty array muki deva nu   
    function updateCount(){
      setcounter(count + 1 )
    
    }
    function updatedata(){
        setdata("parvati")
    }

  return (
    <>
    <Container>
        <h1>useEffect</h1>

      <h1>Button Click {count} time</h1>
      <button onClick={updateCount}>Click Me</button>
      <button onClick={updatedata}>update data</button>
      </Container>
    </>
  )
}

