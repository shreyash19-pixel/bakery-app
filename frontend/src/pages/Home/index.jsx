import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from '../../components/Register';
import Login from '../../components/Login';
import Homepage from '../../components/Homepage';
import NotFound from '../../components/NotFound';

const Home = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homePage" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Home;
