import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import AdminMenu from "../../pages/dashboard/adminDashboard/adminMenu/AdminMenu";
import DeliveryMenMenu from "../../pages/dashboard/DeliveryMenDashboard/deliveryMenMenu/deliveryMenMenu";
import UserMenu from "../../pages/dashboard/userDashboard/userMenu/UserMenu";
import useRole from "../../hooks/useRole";
import Loader from "../../components/loader/Loader";
import { Grid } from "@mui/material";
import logo from "../../assets/images/logo.png";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import { authContext } from "../../providers/authProvider/AuthProvider";

const DashboardLayout = () => {
  const [role, isPending] = useRole();
  const { logOut } = useContext(authContext);

  if (isPending) {
    return <Loader />;
  }

  return (
    <Grid>
      <Grid container spacing={2}>
        <Grid
          color={"#fff"}
          style={{
            padding: "10px",
          }}
          height={"100vh"}
          bgcolor={"#111c43"}
          width={100}
          xs={3}
          item
          container
        >
          <Grid>
            <img style={{ margin: "10px 20px" }} width={"70%"} src={logo} />
            {/* {role === "admin" ? <AdminMenu /> : ""}
            {role === "user" ? <UserMenu /> : ""}
            {role === "Delivery_Men" ? <DeliveryMenMenu /> : ""} */}
            <AdminMenu />
            <UserMenu />
            <DeliveryMenMenu />
          </Grid>
          <Grid fontSize={18} paddingX={4} bottom={30} position={"absolute"}>
            <Grid marginBottom={1}>
              <NavLink onClick={logOut}>
                <LogoutIcon />
                Logout
              </NavLink>
            </Grid>
            <Grid marginBottom={1}>
              <NavLink to={"/dashboard/profile"}>
                <PersonIcon />
                Profile
              </NavLink>
            </Grid>
          </Grid>
        </Grid>
        <Grid maxHeight={"100vh"} overflow={"scroll"} xs={9} item>
          <Outlet />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardLayout;
