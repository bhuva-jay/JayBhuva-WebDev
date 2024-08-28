import axios from 'axios'
import React, { useEffect } from 'react'

export default function AxiosM() {
    useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response)=>{
          console.log(response);
          
      })
    },[])
  return (
    <div>AxiosM</div>
  )
}
