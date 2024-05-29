import React from 'react'


const List_rendaring = () => {
  return (
      <div className='border'>
        <div>List_rendaring</div>
        <div>
            <h1>React conditional Rendaring</h1>
            <ul>
                <Listofproduct name="iphone" isStocked={true} />
                <Listofproduct name="oppo" isStocked={true} />
                <Listofproduct name="vivo" isStocked={false} />
                <Listofproduct name="mi" isStocked={false} />
                
            </ul>
        </div>

    </div>
  )
}

export const Listofproduct=({ name,isStocked}) =>{
    return <li>
        {isStocked ?
        <b>
            {name + 'isStocked'}
        </b>
        :
        <del>
            {name}
        </del>
        }
    </li>

}

export default List_rendaring