import React, { useContext } from 'react'
import { info, infos, infog } from './App'

export default function Page3() {
    const name = useContext(info)
    const sname = useContext(infos)
    const gender = useContext(infog)
      return (
    <>
    {/* this example is context api */}
      {/* <info.Consumer>
        {(name) => (
          <infos.Consumer>
            {(sname) => (
              <infog.Consumer>
                {(gender) => (
                    <div style={{ height:"100vh",display:"flex" ,alignItems:"center",background:"yellow" , justifyContent:"center"}}>
                        
                    <h1 style={{background:"green", color:"red" , textIndent:"50px"}} >
                        MY NAME IS {name}..<br /> AND MY SURNAME IS {sname}..<br /> and
                        my gender is {gender}...
                    </h1>
                    </div>
                )}
              </infog.Consumer>
            )}
          </infos.Consumer>
        )}
      </info.Consumer> */}

      {/* this example is use context */}
     <h1>MY NAME IS  {name}...<br/> MY SURNAME{sname}...<br/> AND MY GENDER IS {gender}... </h1>

    </>
  )
}