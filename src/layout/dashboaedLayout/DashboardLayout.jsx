import React, { useContext } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  if (isPending) {
    return <Loader />;
  }

  return (
    <Grid>
      <Grid container>
        <Grid
          color={"#fff"}
          style={{
            padding: "10px",
          }}
          height={"100vh"}
          bgcolor={"#111111"}
          width={100}
          xs={2.5}
          item
          container
        >
          <Grid>
            <img style={{ margin: "10px 20px" }} width={"70%"} src={logo} />
            {role === "admin" ? <AdminMenu /> : ""}
            {role === "user" ? <UserMenu /> : ""}
            {role === "Delivery_Men" ? <DeliveryMenMenu /> : ""}
          </Grid>
          <Grid fontSize={18} paddingX={4} bottom={30} position={"absolute"}>
            <Grid marginBottom={1}>
              <NavLink
                onClick={() => {
                  logOut();
                  navigate("/");
                }}
              >
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
        <Grid
          bgcolor={"#202020"}
          maxHeight={"100vh"}
          overflow={"scroll"}
          xs={9.5}
          item
        >
          <Outlet />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardLayout;
