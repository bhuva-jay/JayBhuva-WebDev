import React, { useState } from 'react'
import "../components/forminput.css"
export default function Forminput(props) {
     const {lable,errorMessage ,onChange , id , ...inputprops} = props
     const [focused , setFoused] = useState(false)
      const handelFocus =(e)=>{
         setFoused(true)
      }
  return (
    <div className='forminput'>
       <label>{lable}</label>
       <input {...inputprops} onChange={onChange} required onBlur={handelFocus} focused={focused.toString()}  onFocus={()=>inputprops.name==="confirmpassword"&&setFoused(true)}/>
       <span>{errorMessage}</span>
    </div>
  )
}

