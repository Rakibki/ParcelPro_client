import React, { useContext } from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { authContext } from "../../providers/authProvider/AuthProvider";
import { Divider, Grid } from "@mui/material";

const SocialLogin = () => {
  const { loginWithGoogle } = useContext(authContext);

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  return (
    <Grid container marginTop={"40px"} alignItems={"center"} justifyContent={"center"}>
      <Grid width={"auto"} container alignContent={"center"} spacing={6}>
        <Grid
          padding={"10px"}
          sx={{
            cursor: "pointer",
            border: "2px solid #444",
            marginRight: "6px",
            transform: "1s",
            borderRadius: "100%",
          }}
          color={"#444"}
        >
          <FaFacebookF />
        </Grid>
        <Grid
          padding={"10px"}
          sx={{
            cursor: "pointer",
            border: "2px solid #444",
            marginRight: "6px",
            transform: "1s",
            borderRadius: "100%",
          }}
          color={"#444"}
        >
          <FaGithub />
        </Grid>

        <Grid
          onClick={handleGoogleLogin}
          padding={"10px"}
          sx={{
            cursor: "pointer",
            border: "2px solid #444",
            marginRight: "6px",
            transform: "1s",
            borderRadius: "100%",
          }}
          color={"#444"}
        >
          <FaGoogle />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SocialLogin;
