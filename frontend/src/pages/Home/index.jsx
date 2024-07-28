import React from 'react'
import Register from '../../components/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../../components/Login'; // Ensure you have a Login component

const Home = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Home
