import React from 'react'
import { useState } from 'react'
import Child_1 from './Child_1'

export default function Parent() {
  const name = "jaybhuva"
  
  return (
    <>
    < Child_1 name={name} />
    </>
  )
}