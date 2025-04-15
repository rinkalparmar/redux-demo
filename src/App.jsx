import React from 'react';
import NavbarMain from './component/NavbarMain';
import { Routes, Route } from "react-router-dom";
import Home from './component/Home';
import Contact from './component/Contact';
import About from './component/About';
import Login from './component/Login';
import SignUp from './component/SignUp';
import MainData from './component/MainData';
import ProtectedRoute from './component/ProtectedRoute';
// import Sbar from './component/Sbar';


function App() {
  let isAuthenticate = JSON.parse(localStorage.getItem("isAuthenticate"));
  console.log("isAuthenticate===================", isAuthenticate);
  return (
    <>

      <Routes>

        {/* <Route path="/sbar" element={<Sbar />} /> */}

        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<MainData />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Route>


      </Routes>
    </>
  );
}

export default App;