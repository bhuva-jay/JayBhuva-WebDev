import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';
import Todo from './TodoList/Todo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Task_Localsotage/Login';
import SignUp from './Task_Localsotage/SignUp';
import Dasbord from './Task_Localsotage/Dasbord';

function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path='/todo' element={<Todo/>}/>
     <Route path='/' element={<SignUp/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/dashboard' element={<Dasbord/>}/>
    </Routes>
    </BrowserRouter>




  //  <Fragment>
  //   <Todo/>
  //  </Fragment>
  // <SignUp />
  // <Temp />
  );
}

export default App;
