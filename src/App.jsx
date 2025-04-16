import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './component2/Home';
import Contact from './component2/Contact';
import About from './component2/About';
import Login from './component2/Login';
import SignUp from './component2/SignUp';
import MainData from './component2/MainData';
import ProtectedRoute from './component2/ProtectedRoute';


function App() {
  const isAuthenticated = localStorage.getItem("logindata");
  console.log("isAuthenticated", isAuthenticated);
  return (
    <>

      <Routes>
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