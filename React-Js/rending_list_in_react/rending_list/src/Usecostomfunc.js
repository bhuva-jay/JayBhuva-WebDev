import React, { Fragment, useState } from 'react'

export default function Usecostomfunc() {
    const [count , setCount]= useState(0)
    function Incriment(){
      setCount(count+1)
    }
    function Decriment(){
    setCount(count-1)
    }


  return [count , Incriment ,Decriment]
}
