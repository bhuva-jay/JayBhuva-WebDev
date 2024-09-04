import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Admin from './components/Admin';
import Selsmen from './components/Selsmen';
import Buyer from './components/Buyer'
import Dashboard from './components/Dashboard';
import Registration from './components/Registration';
import Login from './components/Login';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/Selsmen' element={<Selsmen />} />
          <Route path='/Buyer' element={<Buyer />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
