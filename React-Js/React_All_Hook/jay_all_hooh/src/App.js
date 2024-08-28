
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DemoTEXTContex from './DemoTEXTContex';
import UseMemo_h from './UseMemo_h';
import UseCALLback from './UseCALLback';
import Ue_task from './Ue_task';
import Task_umemo from './Task_umemo';
import Y_task_memoc from './Y_task_memoc';


export default function App() {
 


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/contex' element={<DemoTEXTContex/>}></Route>
        <Route path='/memo' element={<UseMemo_h/>}></Route>
        <Route path='/callback' element={<UseCALLback/>}></Route>
        <Route path='/task' element={<Ue_task/>}></Route>
        <Route path='/taskmemo' element={<Task_umemo/>}></Route>
        <Route path='/ytask' element={<Y_task_memoc/>}></Route>

      </Routes>
    </BrowserRouter>
 

  )
}














































// setPluse(Math.max(add, 0) * 5)
//  if (add > 0) {
//     setPluse(add*10);
//   } else {
//     setPluse(0);
//   }