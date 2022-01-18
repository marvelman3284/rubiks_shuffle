import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { Cube } from './App';
import { Undef, Contact } from './Others';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Cube />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/404" element={<Undef />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
