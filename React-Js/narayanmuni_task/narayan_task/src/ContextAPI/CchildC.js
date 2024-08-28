import React from 'react'
import { info, infos, infog } from './Context'


export default function CchildC() {
  return (
    <>
{/* <info.Consumer>
  {
    (name)=>{
      return(
         <infos.Consumer>
            {
              (sname) =>{
                return(
                  <infog.Consumer>
                   {
                     (gender)=>{
                       return(
                        <h1> MY NAME IS {name}..<br/> AND MY SURNAME IS {sname}..<br/> and my gender is {infog}</h1>
                      )
                    }
                   }
                </infog.Consumer>
              )
               }
            }
         </infos.Consumer>
      )
    }
  }
</info.Consumer> */}
<info.Consumer>
  {
    (name)=>{
    return(
      <h1>{name}</h1>
    )   
    }
  }
  
</info.Consumer>
    </>
  )
}
