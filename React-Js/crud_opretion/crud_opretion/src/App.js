import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CrudeApp from './CrudeApp'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<CrudeApp/>}/>
    </Routes>
    </BrowserRouter>
  )
}


// import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
// import './App.css';
// import { Fragment, useEffect, useState } from 'react';
// import { EmployeeData } from './EmployeeData';


// function App() {
//   // state
//   const [data, setData] = useState([])
//   const [firstName, setFirstName] = useState('')
//   const [lastName, setLastName] = useState('')
//   const [age, setAge] = useState(0)
//   const [id, setId] = useState(0)
//   console.log('id', id)

//   useEffect(() => {
//     setData(EmployeeData)
//   }, [])


//   const handleEdit = ()=>{
//     const  filterdata = data.filter(item=>item.id ===id)
//     console.log(filterdata);
//    if(filterdata!==undefined)
//    {
//      setId(filterdata[0].id)
//      setFirstName(filterdata[0].firstName)
//      setLastName(filterdata[0].lastName)
//      setAge(filterdata[0].age)
//    }
//   }
  
//   const handledelete = (id) => {
//     if (id > 0) {
//       if (window.confirm("Are You Sure  to delete thisitem ")) {
//         const dt = data.filter(item => item.id !== id)
//         setData(dt)
//       }
//     }
//   }

//   const handlesave = () => {
   
//   }
//   const handleclear = () => {
//     setId("")
//     setFirstName(""); 
//     setLastName(""); 
//     setAge(""); 
//   }

//   return (
//     <Fragment>
//       <div className='App'>
//         <div className='d-flex justify-content-center mt-5 mb-5'>
//           <div>
//           <lable>FirstName:
//             <input type='text' placeholder='Enter your firstname' onChange={(e) => setFirstName(e.target.value)} value={firstName} />
//           </lable>
//           <lable>LastName:
//            <input type='text' placeholder='Enter your lastname ' onChange={(e) => setLastName(e.target.value)}  value={lastName}/>
//           </lable>
//           <lable>Age:
//             <input type='text' placeholder='Enter your age'  onChange={(e) => setAge(e.target.value)}  value={age} />
//           </lable>
//           </div>
//           <div>
//             <button className='btn btn-primary' onClick={() => handlesave()}>save</button>
//             <button className='btn btn-danger' onClick={() => handleclear()}>clear</button>
//           </div>
//         </div>
//         <table className='table table-hover'>
//           <thead>
//             <tr>
//               <td>Sr.No</td>
//               <td>Id</td>
//               <td>FirstName</td>
//               <td>LastName</td>
//               <td>Age</td>
//               <td>Action</td>
//             </tr>
//           </thead>
//           <tbody>
//             {
//               data.map((item, index) => {
//                 return (
//                   <tr key={index}>
//                     <td>{index + 1}</td>
//                     <td>{item.id}</td>
//                     <td>{item.FirstName}</td>
//                     <td>{item.LastName}</td>
//                     <td>{item.Age}</td>
//                     <td>
//                       <button className='btn btn-primary' onClick={() => handleEdit(item.id)}>Edit</button>
//                       <button className=' btn btn-danger' onClick={() => handledelete(item.id)}>Delete</button>
//                     </td>
//                   </tr>
//                 )
//               })
//             }
//           </tbody>
//         </table>
//       </div>
//     </Fragment>
//   );
// }

// export default App;
