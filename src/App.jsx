import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
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
        {!isAuthenticated &&
          <>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </>
        }

        {/* navigate used when login user can change path with login then redirected in home page if he logout the go to other pages */}
        <Route element={<ProtectedRoute />}>
          <Route element={<MainData />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/login" element={<Navigate to="/home" />} />
            <Route path="/signup" element={<Navigate to="/home" />} />
          </Route>
        </Route>
      </Routes >
    </>
  );
}

export default App;