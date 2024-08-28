import React from 'react'
// randreing of list in react
// how map()work in react
export default function Rendering_list() {
//     const IPL = ["CSK","MI","RCB"]
//  const result =IPL.map((ipl)=><h1>{ipl}</h1>)
//   const array = [1,2,3,4,5]
//   const map = array.map(x => x*2)

//   use key 

const IPL = ["CSK","MI","RCB","CSK"]
const result =IPL.map((ipl , index)=><h1 key={index}>{ipl} index is {index}</h1>)
   const l1 = [
    {
      id:"1",
     name:"jay"
    },
    {
      id:"2",
     name:"jay"
    },
    {
      id:"3",
     name:"jay"
    },
    ]
    
    

 
  return (
    <div className='App'>
      <h1>rendereing key use </h1> 
      {result}
     {/* {map} */}
   </div>
  )
}
