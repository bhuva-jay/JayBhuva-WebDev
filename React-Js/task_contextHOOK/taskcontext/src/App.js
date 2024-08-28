import React from "react";
import { createContext } from 'react'
import Page1 from "./Page1";
import Refelement from "./Refelement";

const info = createContext()
const infos = createContext()
const infog = createContext()
export default function App() {
  const name = "dipyan"
  const sname = "bhakhar"
 const gender = "male"

  return (
    <>
      {/* <info.Provider value={name}> 
        <infos.Provider value={sname}>
        <infog.Provider value={gender}>
          <Page1/>   
        
        </infog.Provider>
      </infos.Provider>
      </info.Provider> */}

      < Refelement/>
    </>
  )
}
export { info , infos, infog }
