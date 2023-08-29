import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { authContext } from '../Components/Context/Context';
import Loading from '../Components/Loader/Loading';


const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useContext(authContext);
    console.log(user)
    const location = useLocation();
    if (isLoading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
    }
    return children
};

export default PrivateRoute;