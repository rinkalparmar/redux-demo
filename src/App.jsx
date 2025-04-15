import React from 'react';
import NavbarMain from './component/NavbarMain';
import { Routes, Route } from "react-router-dom";
import Home from './component/Home';
import Contact from './component/Contact';
import About from './component/About';
import Login from './component/Login';
import SignUp from './component/SignUp';

function App() {
  return (
    <>
      {/* <NavbarMain /> */}
      {/* <Sbar/> */}
    <Login/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;