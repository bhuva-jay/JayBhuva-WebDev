import logo from './logo.svg';
import './App.css';
import Forminput from './components/Forminput';
import { useRef, useState } from 'react';
import { type } from '@testing-library/user-event/dist/type';

function App() {
  const [values , setValues] = useState({
     username:"",
     email:"",
     brithday:"",
     password:"",
     confirmpassword:""
  })

  const inputs = [
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"username",
      lable:"username",
      errorMessage:"Username should be 3-16 characters and shouldn't include any special character!",
      required:true,
      pattern:"^[A-Za-z0-9]{3,16}$"
    },
    {
      id:2,
      name:"email",
      type:"email",
      placeholder:"Email",
      lable:"Email",
      required:true,
      errorMessage:"it should be a valid email address!",
    },
    {
      id:3,
      name:"brithday",
      type:"date",
      placeholder:"Brithday",
      lable:"Brithday",
    },
    {
      id:4,
      name:"password",
      type:"password",
      placeholder:"Password",
      lable:"Password",
     errorMessage:"password should be 8-20 charecter and include at least 1 letter , 1 number , 1 spacial charecter ",   
       required:true,
       pattern:"^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,20}"
    },
    {
      id:5,
      name:"confirmPassword",
      type:"password",
      placeholder:"Confrim Password",
      lable:"Confrim Password",
     errorMessage:"password don't match!",
     pattern:values.password,
     required:true,
    }
    
  ]
  
    console.log("re-rendered");
  
  const handelSubmit =
  (e)=>{
    e.preventDefault()
     const data = new FormData(e.target)
    //  console.log(Object.fromEntries(data.entries()));
  }
  const onChange = (e)=>{
     setValues({...values ,[e.target.name]:e.target.value })
  }
  console.log(values);
  
  return (
    <div className='app'>
      <form onSubmit={handelSubmit}>
        <h1>Register</h1>
        {inputs.map((input)=>(
          <Forminput key={input.id} {...input}value={values[input.name]} onChange={onChange}/>
        ))}
        <button>Submit</button>
      </form>
    </div>
      );
}

export default App;
