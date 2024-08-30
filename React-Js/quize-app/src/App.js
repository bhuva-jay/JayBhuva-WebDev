
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Quize from './Componets/Quize';
import Ragister from './Componets/Ragister';
import QuizePage from './Componets/QuizePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Ragister/>}/>
        <Route path='/start' element={<QuizePage/>}/>
        <Route path='/quize' element={<Quize/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
