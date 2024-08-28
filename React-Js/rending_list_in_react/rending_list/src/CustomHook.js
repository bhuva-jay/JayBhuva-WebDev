import React  from 'react'
import Usecostomfunc from './Usecostomfunc'

export default function CustomHook() {
    const[count , Incriment ,Decriment]=Usecostomfunc()
  return (
    <fragment>
        <div className='app'>
      <div>{count}</div>
      <button onClick={Incriment}>incriment</button>
      <button onClick={Decriment}>decriment</button>
        </div>
    </fragment>
  )
}
