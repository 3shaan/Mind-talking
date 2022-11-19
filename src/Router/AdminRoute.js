import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { authContext } from "../Components/Context/Context";
import PuffLoader from "react-spinners/PuffLoader";
import useAdmin from "../Components/Hooks/useAdmin";

const AdminRoute = ({ children }) => {
    const { user, isLoading } = useContext(authContext);
    const [isAdmin] = useAdmin(user?.email)
  console.log(isAdmin);
  const location = useLocation();
  if (isLoading) {
    return (
      <div className="flex justify-center items-center mt-10">
        <PuffLoader color="#36d7b7" size={300} />
      </div>
    );
  }
  if (!user || isAdmin=== false) {
    return (
      <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
    );
  }
  return children;
};

export default AdminRoute;
