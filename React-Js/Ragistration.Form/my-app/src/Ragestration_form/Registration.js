import React, { useEffect, useState } from 'react';
import './Registration.css';

export default function Registration() {
  const [flage, setFlage] = useState(false);
  const [inputData, setInputData] = useState({ name: "", email: "", password: "" });
  const [passwordError, setPasswordError] = useState(false); 
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    console.log("Registered");
  }, [flage]);


  function handelData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData);
  }

  function handelsubmit(e) {
    e.preventDefault();
    let isValidform = true;
    if (!inputData.name || !inputData.email || !inputData.password) {
      alert("All Fields Are Mandatory");
      return;
      isValidform = false;
    }
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegex.test(inputData.email)) {
      alert("Please enter a valid email address.");
      isValidform = false;
    }
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (!passwordRegex.test(inputData.password)) {
      setPasswordError(true);
      alert("This password is not valid.");
      isValidform = false;
    } else {
      setPasswordError(false); 
    }
    if(isValidform){
      setIsValid(true); 
      setFlage(true);
    }
  }
    
  return (
    <>
      {isValid && flage ? <h2 className='ui-define'>Hello {inputData.name}, You've Registered Succesfully</h2> : ""}

      <form className="container" onSubmit={handelsubmit}>
        <div className="header">
          <h1>Ragestration</h1>
        </div>
        <div className="">
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            value={inputData.name}
            onChange={handelData}
          />
        </div>
        <div className="">
          <input
            type="text"
            placeholder="Enter Your Email"
            name="email"
            value={inputData.email}
            onChange={handelData}
          />
        </div>
        <div className="">
          <input
            type="text"
            placeholder="Enter Your Password"
            name="password"
            value={inputData.password}
            onChange={handelData}
          />
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </>
  );
}