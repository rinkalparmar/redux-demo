import React from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute() {
    let navigate = useNavigate();
    const isAuthenticate = localStorage.getItem("logindata");
    return isAuthenticate ? <Outlet /> : <navigate to="/login" />;
}

export default ProtectedRoute;
