import React, { useState } from 'react'

export default function Temp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [data,setData] = useState([])
    // const [name, setName] = useState("")
    const handleSubmit = () => {
        const obj = {
            name : name,
            email : email
        }
        const abc = data.push(obj)
        console.log('data', data)
        localStorage.setItem('regisData',JSON.stringify(data))
    }
  return (
    <div>
        <label>name</label>
        <input type='text' name='name' value={name} onChange={(e)=>setName(e.target.value)}></input>
        <label>email</label>
        <input type='email' name='email' value={email} onChange={(e)=>setEmail(e.target.email)}></input>
        {/* <label>password</label>
        <input type='password' name='pass'></input> */}
        <button onClick={handleSubmit}>submit</button>
    </div>
  )
}
