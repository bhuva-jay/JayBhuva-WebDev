import React from 'react'

const List_rendarinf2 = () => {
  return (
    <>
    <div>List_rendarinf2</div>
    <div>
    <h1 className='text-5xl text-center'>React Conditional Rendering</h1>
            <ul>
                <Listofproduct name="iphone" isStoked={true} />
                <Listofproduct name="samsung" isStoked={true} />
                <Listofproduct name="oppo" isStoked={false} />
                <Listofproduct name="vivo" isStoked={false} />
            </ul>
    </div>

    </>
  )
}
export const Listofproduct=({ name, isStacked})=>{
    return <li> {name} {isStacked && 'isStacked'}
    </li>
}

export default List_rendarinf2