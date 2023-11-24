import React, { useContext } from "react";
import { authContext } from "../providers/authProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
  const { user, loadding } = useContext(authContext);
  if (loadding){
    return  <Loader />
  };
  if(user) {
    return children
  }
  return <Navigate to={"/login"} />
};

export default PrivateRoute;
