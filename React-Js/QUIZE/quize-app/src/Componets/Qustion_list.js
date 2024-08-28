import React from 'react'

export default function Qustion_list({question, options ,handelclick ,cocrectAns}) {

  return (
    <div>
       <h2>{question}</h2>
       <ul>
           {options.map((options , index)=>(<li className={cocrectAns === options ? "selected" : ""} onClick={()=>handelclick(options)} key={index}>{options}</li>))}
       </ul>
    </div>
  )
}
