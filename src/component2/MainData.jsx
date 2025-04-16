// components/AppLayout.js
import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import NavbarMain from './NavbarMain';

const MainData = () => {
    const navigate = useNavigate();
    return (
        <div className="d-flex " >
            <Sidebar />
            <div className="flex-grow-1 mx-3">
                <NavbarMain />
                <div className="p-5 my-3">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default MainData;
