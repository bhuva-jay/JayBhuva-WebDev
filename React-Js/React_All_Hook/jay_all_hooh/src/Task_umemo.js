import React, { useState, useMemo , useCallback } from 'react';

export default function Task_umemo() {
  const [myNum, setMyNum] = useState(0);
  const [show, setShow] = useState(false);

  const getValue =useCallback (() => {
    setMyNum(myNum + 1);
  },[myNum]);

  const countNumber = (num) => {
    console.log("JAYBHUBVA", num);
    for (let i = 0; i <= 1000000000; i++) {
      return num;
    }
  };
  
  const chekdata = useMemo(()=>{
       countNumber(myNum);
  },[myNum])

  return (
    <>
      <button onClick={getValue} style={{ backgroundColor: "teal" }}>Counter</button>
      <h1> my new number :{chekdata}</h1>
      <button onClick={() => setShow(!show)}>
        {show ? "you clickked me " : "click me plz"}
      </button>
    </>
  );
}