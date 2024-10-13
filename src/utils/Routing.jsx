import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import UserDetail from '../components/UserDetail';

const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About/>} />
        <Route path="/About/:name" element={<UserDetail/>} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default Routing