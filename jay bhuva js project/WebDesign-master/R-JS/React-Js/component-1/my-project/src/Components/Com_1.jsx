
import React from 'react'

const Com_1 = (props) => {
  return (
    <div>
        <div className='h-[550px] w-[350px] border border-black ms-4 shadow-lg shadow-blue-500'>
            <div>
                <img className='h-[250px] w-[350px]' src={props.img} alt="" />
            </div>
            <div className='text-center mt-6'>
                <h1 className='text-2xl text-black font-bold' >{props.heading}</h1>
            </div>
            <div>
                <p className='text-center m-3 text-slate-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam vel fugiat a nisi praesentium magni incidunt, at, consequatur eligendi iure dolorum accusantium aliquam. Molestias, saepe odit sint quam corrupti maxime!</p>
            </div>
            <div className='justify-center flex mt-4 '>
                <button className='h-10 w-32 border border-blue-600 rounded-md text-slate-500'>Go AnyWhere</button>
            </div>
        </div>
    </div>
  )
}

export default Com_1