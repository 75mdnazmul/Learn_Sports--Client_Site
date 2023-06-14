import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <div className="flex items-center justify-center h-[100vh]">
            <span className="loading loading-spinner w-[50px] text-warning"></span>
        </div>;
    }
    if (user) {
        return children;
    }


    return <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>
};

export default PrivateRoutes;