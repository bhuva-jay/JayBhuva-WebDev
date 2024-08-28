import React, { Fragment, useEffect, useState } from 'react'
import '../TodoList/Todo.css'
//  to get data  frome localstorage 
  const getLocalItems = ()=>{
    let data = localStorage.getItem("Data")
    // console.log(data);
    if (data) {
       return  JSON.parse(localStorage.getItem("Data"))
    }
    
  }
export default   function Todo() {
    const [activity, setActivity] = useState("")
  const [listData, setListData] = useState(getLocalItems())
  function addActivity() {
    // setListData([...listData ,activity]) 
    // console.log(listData);
    setListData((listdata) => {
      const updatedList = [...listData, activity]
      console.log(updatedList);
      setActivity('')
      return updatedList
    })
  }

  
  function removeAct(i) {
    const updatedListData = listData.filter((ele, id) => {
      return i !== id;
    });
    setListData(updatedListData);
  }
  function removeAll(){
     setListData([])
  }
//  local storage  
  useEffect(()=>{
    localStorage.setItem ("Data", JSON.stringify(listData))
},[listData])


  return (
    <Fragment>
      <div className='container'>
        <div className='header'>TODO LIST</div>
        <input type='text' placeholder='Add Activity' value={activity} onChange={(e) => setActivity(e.target.value)} />
        <button onClick={addActivity}>Add</button>
        <p className='List-heading'>Here is your list :</p>
        {listData != [] && listData.map((data, i) => {
          return (
            <>
              <p key={i}>
                <div className='ListData'>{data}</div>
                <div className='btn-position'>
                  <button onClick={() => removeAct(i)}>Remove(-)</button>
                </div>

              </p>
            </>
          )
        })}
        {listData.length>=1 &&<button onClick={removeAll}>Remove All</button>}
        
      </div>
    </Fragment>
  )
}



  
  