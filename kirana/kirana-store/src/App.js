import React from 'react';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import LoginRegister from './components/LoginRegister';
import KiranaStoreAdmin from './components/KiranaStoreAdmin';
import Salesmen from './components/Salesmen';
import Buyer from './components/Buyer';
import '../src/App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<LoginRegister/>} />
        <Route path="/admin" element={<KiranaStoreAdmin/>} />
        <Route path="/salesmen" element={<Salesmen/>} />
        <Route path="/buyer" element={<Buyer/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;