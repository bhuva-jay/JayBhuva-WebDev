import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Home from './components/Home';

function App() {
  return (
    <>
      <Router>
        <Header/>
           <Routes>
               <Route path="/" element={<Signup/>} />
               <Route path='/login' element={<Signin/>}  />
               <Route  path='/home' element={<Home/>}  />
               
            </Routes>
    </Router>
    
    </>
  );
}

export default App;
