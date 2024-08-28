import React  from 'react'
import LChild from './LChild'

export default function LParent() {
   function getData(data){
    console.log(data);
    
   }
  return (
     <LChild getData={getData}/>
  )
}
