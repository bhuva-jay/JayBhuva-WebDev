import React, { useState } from 'react'

export default function AgeValidation() {
  const [isAgevalid, setIsAgevalid] = useState(false)

  // this is if/else atatement method
  // if(isAgevalid){
  //   return<div>you can vote</div>
  // }else{
  //   return<div>you can not vote</div>
  // }
  // element vairible method use    conditionly oprator
  //   let age ;
  //    if(isAgevalid){
  //  age = <div>you can vote</div>
  //    }else{
  //     age =<div>you can not vote</div>
  //    }
  //    return<>{age}</> 


  // use ternary  condition in react
     //  return(
     //   <>
     //    {isAgevalid ? <div>you can vote</div> : <div>you can not vote</div>}
     //   </>
     //  )
  
   // sort circuit opration 
   return(
      <>
      {/* koy ek j condition lakhi sako if ni jem else part na lakhi sakai */}
        {isAgevalid && <div>you can vote</div>}
      </>
   )
}
