import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/mainLayout/MainLayout";
import Home from "../pages/home/home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Secret from "../pages/secret/Secret";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import Delivery_Men_route from "./Delivery_Men_route";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/secret",
        element: <Secret />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
