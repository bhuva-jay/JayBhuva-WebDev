import axios from 'axios'
import React, { useState } from 'react'

export default function Wether() {
   const [city, setCity] = useState()
   const [weater , setWeather] = useState()
   const [temp , setTemp]=useState()

   const handelcitychange = (e) => {
      setCity(e.target.value)
   }
   const fetchwether = async () => {
      try {
         const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'a90fb2b8498ae59547b3157f6e36cf69'}`)
       setWeather(res)
       setTemp(res)
      }
      catch (error) {
         console.error(error)
         console.log('error feching weather data', error)
      }
   }
    console.log('wether', weater)
   const handelclick = () => {
      fetchwether();
   }
   return (
      <div className='wether-conatiner'>
         <input type='text' placeholder='Enter City Name' className='width'
            name={city}
            onChange={handelcitychange} /><br/><br/>
         <button className='btnn' onClick={handelclick}>Get weather</button>
         {weater && 
         <>
         <div className='text' >
            <h3>{weater.data.name}</h3>
            Copy code
<h4>Temperature is {temp.data.main.temp.toFixed(0)}°C</h4>
            <p>{weater.data.weather[0].description}</p>
         </div>
         </> }
      </div>
   )
}
