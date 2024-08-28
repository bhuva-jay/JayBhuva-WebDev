import React, { useState, useRef } from 'react';

export default function Refelement() {
  const [myData, setMyData] = useState("");
 
  const inputelement = useRef("");
  function changstyle(){
    inputelement.current.style.backgroundColor="black"
    inputelement.current.style.color="white"

  }
  

  return (
    <div style={{ height:"100vh",display:"flex", justifyContent:"center",alignItems:"center" ,flexDirection:"column", backgroundColor:"teal"}}>
      <input style={{height:"50px", width:"400px",fontSize:"30px" ,display:"flex" }} ref={inputelement} type='text' value={myData} onChange={(e) => setMyData(e.target.value)}/><br></br>
      <button style={{  height:"60px", width:"200px",backgroundColor:"#025043", color:"white"}} onClick={changstyle}>submit</button>
    </div>
  )
}