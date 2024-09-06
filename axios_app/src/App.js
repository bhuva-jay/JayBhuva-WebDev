import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Axios_Get from './Axios_Get';
import Axios_Post from './Axios_Post';
import Axios_Update from './Axios_Update';
import Recover from './Recover';




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Axios_Get />} />
          <Route path='/post' element={<Axios_Post />} />
          <Route path='/update' element={<Axios_Update />} />
          <Route path='/update/:id' element={<Axios_Update />} />
          <Route path='/recover' element={<Recover />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
