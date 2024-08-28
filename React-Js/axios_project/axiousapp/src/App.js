import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Axios from './Axios';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='' element={<Axios/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
