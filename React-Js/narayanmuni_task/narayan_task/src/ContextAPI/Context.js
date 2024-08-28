import React, { createContext, useState } from 'react'
import Cchild_A from './Cchild_A'
const info = createContext()
// const infos = createContext()
// const infog = createContext()
export default function Context() {
 const name = "dipyan"
//  const sname = "bhakhar"
//  const gender = "male"
  return (
    <>
    <info.Provider value={name}>
      {/* <infos.Provider value={sname}>
        <infog.Provider value={gender}> */}
          <Cchild_A />
        {/* </infog.Provider>
      </infos.Provider> */}
    </info.Provider>
    </>
  )
}
export{info }
