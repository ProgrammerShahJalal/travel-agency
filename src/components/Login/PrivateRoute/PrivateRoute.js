import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) {
        return <button type="button" class="bg-indigo-500" disabled>
            <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
            </svg>
            Just wait, Processing...
        </button>
    }
    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />
};

export default PrivateRoute;