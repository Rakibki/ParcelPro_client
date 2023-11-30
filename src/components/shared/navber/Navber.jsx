import React, { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../../providers/authProvider/AuthProvider";
import useRole from "../../../hooks/useRole";
import Loader from "../../loader/Loader";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import logo from "../../../assets/images/logo.png";
import { Grid, Stack } from "@mui/material";
import PrimayButton from "../button/PrimayButton";
import aos from "aos";

const Navber = () => {
  const { user, logOut } = useContext(authContext);
  const [role, isPending] = useRole();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  if (isPending && role) {
    return <Loader />;
  }

  const handleLogout = () => {
    logOut();
  };

  useEffect(() => {
    aos.init();
  }, []);

  const navItems = (
    <Grid sx={{ marginX: "auto" }}>
      <Stack direction="row">
        <MenuItem onClick={handleCloseNavMenu}>
          <Typography textAlign="center">Home</Typography>
        </MenuItem>
        <MenuItem onClick={handleCloseNavMenu}>
          <Typography textAlign="center">About</Typography>
        </MenuItem>
        <MenuItem onClick={handleCloseNavMenu}>
          <Typography textAlign="center">Contact</Typography>
        </MenuItem>
      </Stack>
    </Grid>
  );

  return (
    <div data-aos="fade-down">
      <Grid marginX={"auto"} maxWidth={"1300px"}>
        <AppBar
          sx={{
            bgcolor: "#000000b3",
            position: "fixed",
            zIndex: "54545",
            paddingY: "10px",
            maxWidth: "1300px",
          }}
          position="static"
        >
          <Container>
            <Toolbar disableGutters>
              <Grid sx={{ width: "150px" }}>
                <Link to={"/"}>
                  <img src={logo} alt="" />
                </Link>
              </Grid>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                ></Menu>
              </Box>
              <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                LOGO
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {navItems}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  {user?.email ? (
                    <div onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        sx={{ border: "1px solid #f44647" }}
                        alt="Remy Sharp"
                        src={user?.photoURL}
                      />
                    </div>
                  ) : (
                    <Link to="/login">
                      <PrimayButton>Login</PrimayButton>
                    </Link>
                  )}
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {user?.email ? (
                    <Grid height={"100%"} bgcolor={"#2b2c34"} padding={2}>
                      <Typography
                        color="#f44647"
                        textAlign={"center"}
                        mb-2
                        sx={{ fontSize: "17px", fontWeight: "500" }}
                        variant="h6"
                        component="h6"
                      >
                        {user?.displayName}
                      </Typography>

                      {role == "admin" && (
                        <Link to={"/dashboard/statistics"}>
                          <Typography
                            marginY={"10px"}
                            fontSize={"18px"}
                            variant="h6"
                            color="#f44647"
                            textAlign="center"
                          >
                            Dashboard
                          </Typography>
                        </Link>
                      )}

                      {role == "user" && (
                        <Link to={"/dashboard/bookParcel"}>
                          <Typography
                            marginY={"10px"}
                            fontSize={"18px"}
                            variant="h6"
                            color="#f44647"
                            textAlign="center"
                          >
                            Dashboard
                          </Typography>
                        </Link>
                      )}
                      {role == "Delivery_Men" && (
                        <Link to={"/dashboard/MyDeliveryList"}>
                          <Typography
                            marginY={"10px"}
                            fontSize={"18px"}
                            variant="h6"
                            color="#f44647"
                            textAlign="center"
                          >
                            Dashboard
                          </Typography>
                        </Link>
                      )}

                      <MenuItem mb-2 onClick={handleLogout}>
                        <PrimayButton
                          style={{ width: "100%" }}
                          textAlign="center"
                        >
                          Logout
                        </PrimayButton>
                      </MenuItem>
                    </Grid>
                  ) : (
                    <>
                      <Link to={"/login"}>
                        <MenuItem>
                          <Typography textAlign="center">Login</Typography>
                        </MenuItem>
                      </Link>
                    </>
                  )}
                </Menu>
              </Box>
              <MenuItem>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={17} color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
              </MenuItem>
            </Toolbar>
          </Container>
        </AppBar>
      </Grid>
    </div>
  );
};

export default Navber;
