import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { authContext } from '../Components/Context/Context';
import PuffLoader from "react-spinners/PuffLoader";


const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useContext(authContext);
    console.log(user)
    const location = useLocation();
    if (isLoading) {
        return (
          <div className="flex justify-center items-center mt-10">
            <PuffLoader color="#36d7b7" size={300} />
          </div>
        );
    }
    if (!user) {
        return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
    }
    return children
};

export default PrivateRoute;