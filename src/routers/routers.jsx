import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/mainLayout/MainLayout";
import Home from "../pages/home/home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Secret from "../pages/secret/Secret";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import Delivery_Men_route from "./Delivery_Men_route";
import DashboardLayout from "../layout/dashboaedLayout/DashboardLayout";
import BookParcel from "../pages/dashboard/userDashboard/bookParcel/BookParcel";
import MyDeliveryList from "../pages/dashboard/DeliveryMenDashboard/MyDeliveryList/MyDeliveryList";
import MyParcels from "../pages/dashboard/userDashboard/MyParcels/MyParcels";
import AllUsers from "../pages/dashboard/adminDashboard/AllUsers/AllUsers";
import AllParcels from "../pages/dashboard/adminDashboard/AllParcels/AllParcels";
import AllDeliver from "../pages/dashboard/adminDashboard/AllDeliver/AllDeliver";
import Statistics from "../pages/dashboard/adminDashboard/Statistics/Statistics";
import MyReviews from "../pages/dashboard/DeliveryMenDashboard/MyReviews/MyReviews";
import Profile from "../components/shared/profile/Profile";
import UpdateParcel from "../pages/dashboard/userDashboard/updateParcel/UpdateParcel";

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
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "bookParcel",
        element: <BookParcel />,
      },
      {
        path: "myParcel",
        element: <MyParcels />,
      },
      {
        path: "AllParcels",
        element: <AllParcels />,
      },
      {
        path: "users",
        element: <AllUsers />,
      },
      {
        path: "deliveryMen",
        element: <AllDeliver />,
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "MyDeliveryList",
        element: <MyDeliveryList />,
      },
      {
        path: "MyReviews",
        element: <MyReviews />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "updateParcel/:id",
        element: <UpdateParcel />,
        loader: ({params}) => fetch(`http://localhost:4000/getSingleParcel/${params.id}`)
      },
    ],
  },
]);

export default router;
