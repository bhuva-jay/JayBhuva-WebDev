import React from "react";
import { data , data1 } from "./App";

export default function Demo_prop_drillingC() {
  return (
    <>
    <data.Consumer>
    {
        (name)=>{
          return(
            <data1.Consumer>
              {
                (gender) => {
                   return(

                     <h1> my name is {name} and my gender is {gender}</h1> 
                   )
                }
              }
            </data1.Consumer>
          )
        }
      }
    </data.Consumer>
    </>
  )
}
