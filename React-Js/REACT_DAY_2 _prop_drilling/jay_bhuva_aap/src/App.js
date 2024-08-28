import React, { createContext, useState} from 'react'
import Demo_prop_drillingA from './Demo_prop_drillingA'




// create provider consumer 
const data  = createContext()
const data1 = createContext()

 function App() {
  // const name = "jaybhuva"
  const[name , setName] = useState("jaybhuva")
  const[gender , setGender] = useState("male") 

  return (
    <>
    <data.Provider value={name}>
      <data1.Provider value={gender}>
     <Demo_prop_drillingA/>  
     </data1.Provider>
     </data.Provider>
    </>
  )
}
export default App;
export{data, data1};



