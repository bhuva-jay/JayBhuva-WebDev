import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Rendering_list from './Rendering_list';
import State_object from './State_object';
import State_array from './State_array';

import Todo from './Toodolist/Todo';
import Use_raducerhook from './Use_raducerhook';
import CustomHook from './CustomHook';
function App() {
  return (
   <>
   {/* map rander throgh  */}
       {/* <Rendering_list/> */}
   {/* usestate with object    */}
       {/* <State_object/> */}
   {/* usestate with array    */}
       {/* <State_array/> */}
   {/* todo list    */}
       <Todo/>
   {/*use reducer hook  */}
       {/* <Use_raducerhook/> */}
   {/*customhook */}
        {/* <CustomHook/> */}
   </>
  );
}

export default App;
