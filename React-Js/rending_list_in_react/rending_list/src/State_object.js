import React,{useState} from 'react'

export default function State_object() {
    const [allValue , setValue] = useState({
        fristName:"jay",
        lastName:"bhuva"
    })
     function update(){
       setValue({...allValue,fristName:"parantap"}) 
     }
  return (
    <>
      <div className='App'>
        <h1>usestate with object </h1>
        <h1>First Name Is  {allValue.fristName} Last Name Is {allValue.lastName}</h1> 
       <button onClick={update}>Update</button>
      </div> 
    </>
  )
}
