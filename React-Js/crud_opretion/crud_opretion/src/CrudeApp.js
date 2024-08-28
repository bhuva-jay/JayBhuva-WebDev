import React, { useState , useEffect } from 'react'

export default function CrudeApp() {
    const [ inputs , setInputs]=useState(
        {
            name:"",
            email:"",

        }
    )

    const[tableData , setTableData]=useState([])

    
    useEffect(() => {
        const storedData = localStorage.getItem('tableData');
        if (storedData) {
          setTableData(JSON.parse(storedData));
        }
      }, []);
    
      useEffect(() => {
        localStorage.setItem('tableData', JSON.stringify(tableData));
      }, [tableData]);

    const handlechange=(e)=>{
        setInputs(
            {
                ...inputs,
                [e.target.name]:e.target.value,
            }
        )
    }

    const handlesumbit=(e)=>{
       e.preventDefault()
     //    console.log('inputs', inputs)
       setTableData([...tableData,inputs])
       setInputs(
        {
            name:"",
            email:"",
        }
       )
    }

const deleteData=(index)=>{
   const filterData = tableData.filter((item , i )=>i!==index)
   setTableData(filterData)
   alert("are you sure delete this data")
}
 const handleEdit=(index)=>{
  const tempData = tableData[index]
  console.log('tempData', tempData)
  setInputs(tempData)
 }
  const handelClear=()=>{
    setInputs("")
  }

  return (
    <div className='bg-info '  style={{height:"100vh"}}> 
         <h1 className='text-center'> CudeApp</h1>
         <div className=' h-25 bg-body-secondary
        w-25 m-auto  p-4'>
            <form onSubmit={handlesumbit}>
                <div className='d-flex flex-column'>
                    <label>Name</label>
                    <input name="name" value={inputs.name} onChange={handlechange}/>
                </div>
                <div className='d-flex flex-column'>
                    <label>Email</label>
                    <input name='email' value={inputs.email}
                    onChange={handlechange}/>
                </div>
                  <div className=' d-flex align-items-center justify-content-center mt-2'>
                <button type="submit" className='btn btn-danger w-25  fw-bold me-2 0'>Add{" "}</button>
                <button onClick={handelClear} className='btn btn-danger w-25  fw-bold '> Clear</button> 
                  </div>
            </form>
         </div>
         <div>
            <table class="table text-center mt-5" >
                <thead>
                    <tr class="table-active">
                        <th  className='fw-bold fs-4'>Name</th>
                        <th  className='fw-bold fs-4'>Email</th>
                        <th  className='fw-bold fs-4'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map((item,i)=>(
                            <tr>
                                <td className='fs-5 fw-bold'>{item.name}</td>
                                <td className='fs-5 fw-bold'>{item.email}</td>
                                <td className='text-center '>
                                    <button onClick={()=>handleEdit(i)} className='btn btn-success me-2'>Edit</button>
                                    <button onClick={()=>deleteData(i)} className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
         </div>
    </div>
  )
}
