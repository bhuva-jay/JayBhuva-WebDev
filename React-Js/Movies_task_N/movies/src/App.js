import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Movie_get from './Movie_get';
import Movie_post from './Movie_post';
import Movies_update from './Movies_update';
import Movie_recover from './Movie_recover';
 export default function App() {
 

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Movie_get />} />
          <Route path='/post' element={<Movie_post/>} />
          <Route path='/update' element={< Movies_update/>} />
          <Route path='/update/:id' element={< Movies_update/>} />
          <Route path='/recover' element={<Movie_recover />} />
      </Routes>
    </BrowserRouter>
  );
}