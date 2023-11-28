import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../../providers/authProvider/AuthProvider";
import { getUser } from "../../../api/auth";
import { Avatar, Grid, Typography } from "@mui/material";
import Loader from "../../loader/Loader";
import Divider from "@mui/material/Divider";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import EditIcon from "@mui/icons-material/Edit";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import uploadeImage from "../../../api/uploadeImage";

const Profile = () => {
  const { user } = useContext(authContext);
  const [currentUser, setCurrentUser] = useState({});
  const axiosSecure = useAxiosSecure();
  const [imageFile, setImageFile] = useState(null)


  useEffect(() => {
    getUser(user?.email).then((res) => {
      setCurrentUser(res);
      console.log(res);
    });
  }, [user]);

  const handleImageUplode = async () => {
    const image = await uploadeImage(imageFile)
    const res = await axiosSecure.put(`/updateProfile/${user?.email}`, {image});
    console.log(res);
  };

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

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
        <Grid
          sx={{ position: "relative" }}
          marginTop={"-50px"}
          container
          justifyContent={"center"}
        >
          <img
            style={{
              borderRadius: "100%",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
            width={"100px"}
            alt="Remy Sharp"
            src={currentUser.image}
          />
          <Grid sx={{ cursor: "pointer" }} onClick={handleImageUplode}>
            <Typography
              variant="p"
              bgcolor={""}
              paddingX={0.5}
              color={"#fff"}
              borderRadius={"10px"}
              paddingY={0.5}
              onChange={(e) => setImageFile(e.target.files[0])}
              sx={{
                position: "absolute",
                left: "55%",
                fontSize: "13px",
                bottom: "-10px",
                bgcolor: "#5c8134",
              }}
              component="label"
            >
              <EditIcon />
              <VisuallyHiddenInput type="file" />
            </Typography>
          </Grid>
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
          <Grid
            marginTop={"20px"}
            gap={"10px"}
            container
            justifyContent={"center"}
          >
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
