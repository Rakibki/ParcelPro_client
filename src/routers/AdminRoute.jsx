import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import useRole from "../hooks/useRole";
import { authContext } from "../providers/authProvider/AuthProvider";
import Loader from "../components/loader/Loader";

const AdminRoute = ({ children }) => {
  const [role, isPending] = useRole();
  const { user, loadding } = useContext(authContext);

  if (isPending, loadding) {
    return <Loader />;
  }

  return role === "admin" ? children : <Navigate to={"/"} ></Navigate>
};

export default AdminRoute;
