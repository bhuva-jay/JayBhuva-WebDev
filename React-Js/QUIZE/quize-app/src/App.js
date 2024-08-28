
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Quize from './Componets/Quize';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Quize/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
