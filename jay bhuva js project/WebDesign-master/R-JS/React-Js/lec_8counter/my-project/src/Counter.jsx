 
import { useState } from 'react'

const Counter = () => {
    const [Count, SetCount] = useState(0)

 const handleIncrement =() => {
    SetCount(Count + 1)
 }   

 const handleDecrement = () => {
    if(Count > 0){
        SetCount (Count-1)
    } else {
        SetCount(0)
    }
 }

 const handleReset = () => {
    SetCount(0)

 }
  return (
    <>
    <div className='mx-auto h-screen border flex justify-center items-center'>
        <div className='border border-blue-200 bborder-spacing-2 p-10 shadow-lg'>
            <h1 className='font-bold text-6xl text-center'>{Count}</h1>
            <div className='mt-6 border border-gray-300 shadow-xl p-6'>
                <button className='ms-4 p-2 border border-gray-300 rounded-full shadow-xl' onClick={handleIncrement}>Increment</button>
                <button className='ms-4 p-2 border border-gray-300 rounded-full shadow-xl'onClick={handleDecrement}>Decrement</button>
                <button className='ms-4 p-2 border border-gray-300 rounded-full shadow-xl'onClick={handleReset}>Reset</button>
            </div>
        </div>

    </div>
    </>
  )
}

export default Counter