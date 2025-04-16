import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute() {
    let navigate = useNavigate();

    useEffect(() => {

        const isAuthenticate = localStorage.getItem("logindata");
        if (!isAuthenticate) {
            navigate("/login");
        }
     
    }, []);
    
    return  <Outlet />;


    // else{

    // }
    // return isAuthenticate ? <Outlet /> : navigate("/login");

}

export default ProtectedRoute;
// <navigate to="/login" />