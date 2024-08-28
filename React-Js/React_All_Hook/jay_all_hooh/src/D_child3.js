import React, { useContext } from "react";
import { data , data1 } from "./DemoTEXTContex";

export default function D_child3() {
  const fname = useContext(data);
  const gender = useContext(data1);
  return (
  // this is usecontext api method 
       <>
        <h1> my name is {fname} and my gender is {gender}</h1> 
       </>

    // this is context api  metohd
    // <>
    // <data.Consumer>
    // {
    //     (name)=>{
    //       return(
    //         <data1.Consumer>
    //           {
    //             (gender) => {
    //                return(

    //                  <h1> my name is {name} and my gender is {gender}</h1> 
    //                )
    //             }
    //           }
    //         </data1.Consumer>
    //       )
    //     }
    //   }
    // </data.Consumer>
    // </>
  )
}


