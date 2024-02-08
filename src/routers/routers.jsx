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
import BlogDetails from "../pages/blogDetails/BlogDetails";

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
        path: "/blog/:id",
        element: <BlogDetails />,
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
        element: (
          <PrivateRoute>
            {" "}
            <BookParcel />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "myParcel",
        element: (
          <PrivateRoute>
            {" "}
            <MyParcels />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "AllParcels",
        element: (
          <AdminRoute>
            {" "}
            <AllParcels />{" "}
          </AdminRoute>
        ),
      },
      {
        path: "users",
        element: (
          <AdminRoute>
            {" "}
            <AllUsers />{" "}
          </AdminRoute>
        ),
      },
      {
        path: "deliveryMen",
        element: (
          <AdminRoute>
            <AllDeliver />
          </AdminRoute>
        ),
      },
      {
        path: "statistics",
        element: (
          <AdminRoute>
            <Statistics />
          </AdminRoute>
        ),
      },
      {
        path: "MyDeliveryList",
        element: (
          <Delivery_Men_route>
            <MyDeliveryList />
          </Delivery_Men_route>
        ),
      },
      {
        path: "MyReviews",
        element: (
          <Delivery_Men_route>
            {" "}
            <MyReviews />{" "}
          </Delivery_Men_route>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            {" "}
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "updateParcel/:id",
        element: (
          <PrivateRoute>
            {" "}
            <UpdateParcel />{" "}
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:4000/getSingleParcel/${params.id}`),
      },
    ],
  },
]);

export default router;
