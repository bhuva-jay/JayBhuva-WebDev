import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AxiosM from './AxiosM';
import AxiosPost from './AxiosPost';

function App() {
  return (
   <BrowserRouter>
    <Routes>
    <Route path='/' element={<AxiosM/>}/>
    <Route path='/post' element={<AxiosPost/>}/>
   </Routes>
   </BrowserRouter>
);
}

export default App;
{/* <AxiosM/> */}
