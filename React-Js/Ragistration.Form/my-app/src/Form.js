import React, { useState } from 'react'

export default function Form() {
  const [name , setName] = useState("");
  const[password, setPassword] = useState("")
  function handleChange(e){
    //   console.log(e.target.name);
    if (e.target.name == "firstName") {
      const capName = (e.target.value).toUpperCase();
      setName(capName)
    } else {
      setPassword(e.target.value)
    }
  }
  
  return (
      <form className='container'>
      <h1>FORM CONTROL COMPONENTS</h1>
     <label>First name:</label><br/>
     <input type='text' name='firstName' value={name} onChange={handleChange}/><br/>
     <label>Password:</label><br/>
     <input  type='text' name='password' value={password} onChange={handleChange}/><br/>
  </form>
)
}