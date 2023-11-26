import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../../providers/authProvider/AuthProvider";
import { getUser } from "../../../api/auth";
import { Avatar, Grid, Typography } from "@mui/material";
import Loader from "../../loader/Loader";
import Divider from "@mui/material/Divider";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Profile = () => {
  const { user } = useContext(authContext);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    getUser(user?.email).then((res) => {
      setCurrentUser(res);
      console.log(res);
    });
  }, [user]);

  return (
    <Grid
      container
      bgcolor={"#e4eff4"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100Vh"}
      width={"100%"}
    >
      <Grid borderRadius={"10px"} height={"60%"} width={"40%"} bgcolor={"#fff"}>
        {/* <img className="z-10" src={currentUser?.photoURL} alt="" /> */}
        <Grid marginTop={"-50px"} container justifyContent={"center"}>
          <img
            style={{
              borderRadius: "100%",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
            width={"100px"}
            alt="Remy Sharp"
            src={currentUser.image}
          />
        </Grid>
        <Typography
          textAlign={"center"}
          color={"#2e373e"}
          marginTop={2}
          variant="h6"
        >
          {currentUser?.name}
        </Typography>
        <Grid container justifyContent={"center"}>
          <Typography
            bgcolor={"#5c8134"}
            fontSize={"15px"}
            textAlign={"center"}
            variant="p"
            paddingX={2}
            paddingY={0.5}
            color={"#fff"}
            borderRadius={"10px"}
            marginTop={"5px"}
            marginBottom={"5px"}
          >
            {currentUser?.role}
          </Typography>
        </Grid>

        <Typography
          marginBottom={"20px"}
          fontSize={"16px"}
          textAlign={"center"}
          color={"#485157"}
          marginTop={2}
          variant="h6"
        >
          Email {currentUser?.email}
        </Typography>
        <Divider variant="middle" />
        <Grid container justifyContent={"center"}>
          <Grid marginTop={"20px"} gap={"10px"} container justifyContent={"center"}>
            <Avatar alt="Remy Sharp">
              <FacebookIcon />
            </Avatar>
            <Avatar alt="Remy Sharp">
              <TwitterIcon />
            </Avatar>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Profile;
