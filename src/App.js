import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Home';
import Staking from './Staking';
import Merchandise from './Merchandise';

AOS.init({
  once: true 
}); 
const App = () => {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/staking" element={<Staking />} />
          <Route path="/merchandise" element={<Merchandise />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
