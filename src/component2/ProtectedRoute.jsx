import React, { use, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


function ProtectedRoute() {
    let navigate = useNavigate();


    const isAuthenticate = localStorage.getItem("logindata");
    return isAuthenticate ? <Outlet /> : <Navigate to="/login" replace />;
    // useEffect(() => {

    //     // const isAuthenticate = localStorage.getItem("isAuthenticate");
    //     if (!isAuthenticate) {
    //         navigate("/login");
    //     }

    // }, []);



    // useEffect(() => {

    //     const isAuthenticate = localStorage.getItem("logindata");
    //     if (!isAuthenticate) {
    //         navigate("/login"); 

    //     }

    // }, []);

    // return  <Outlet />;


    // else{

    // }
    // return isAuthenticate ? <>
    // </> : navigate("/login");

}

export default ProtectedRoute;
// <navigate to="/login" />