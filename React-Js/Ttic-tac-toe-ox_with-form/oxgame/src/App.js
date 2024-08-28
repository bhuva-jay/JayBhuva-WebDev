import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import TicTacToe from './OXcomponents/TicTacToe';
import SignUp from './FormComponents/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<SignUp />} />
        <Route path="/game" element={<TicTacToe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;