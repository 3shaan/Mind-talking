import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { authContext } from "../Components/Context/Context";
import useAdmin from "../Components/Hooks/useAdmin";
import Loading from "../Components/Loader/Loading";

const AdminRoute = ({ children }) => {
    const { user, isLoading } = useContext(authContext);
    const [isAdmin] = useAdmin(user?.email)
  console.log(isAdmin);
  const location = useLocation();
  if (isLoading) {
    return <Loading></Loading>
  }
  if (!user || isAdmin=== false) {
    return (
      <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
    );
  }
  return children;
};

export default AdminRoute;
