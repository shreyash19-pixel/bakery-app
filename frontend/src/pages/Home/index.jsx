import React from 'react'
import Register from '../../components/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../../components/Login'; // Ensure you have a Login component
import Homepage from '../../components/Homepage';


const Home = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path = "/homePage" element = {<Homepage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Home
