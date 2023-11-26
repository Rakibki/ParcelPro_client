import React, { useContext } from "react";
import loginimgae from "../../assets/images/login1.png";
import { Button, Grid, TextField, Typography } from "@mui/material";
import SocialLogin from "../../components/socialLogin/SocialLogin";
import { Link } from "react-router-dom";
import { authContext } from "../../providers/authProvider/AuthProvider";

const Login = () => {
  const {loginUser} = useContext(authContext)
  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;



    loginUser(email, password)
      .then((res) => {
        console.log("login User");
        navigate(location.state ? location.state : "/");
      })
      .catch((e) => console.log(e.message));
  };

  return (
    <>
      <Grid
        container
        alignItems={"center"}
        justifyContent={"center"}
        height={"100vh"}
      >
        <Grid
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          height={"600px"}
          bgcolor={"#fff"}
          padding={"20px"}
          width={"50%"}
        >
          <Typography marginTop={"20px"} textAlign={"center"} variant="h5">
            Login Now
          </Typography>

          <form onSubmit={handleLogin} className="p-10 card-body">
            <TextField
              id="outlined-basic"
              name="email"
              label="Email Address"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              name="password"
              label="Passsword"
              variant="outlined"
            />

            <Grid container justifyContent={"center"}>
              <Button type="submit" variant="contained" color="success">
                Login
              </Button>
            </Grid>
          </form>

          <SocialLogin />
          <Grid container justifyContent={"center"}>
            <Typography variant="p">
              Already a member?{" "}
              <Link
                className="hover:underline hover:text-[#2ad4bc]"
                to={"/login"}
              >
                {" "}
                Login here{" "}
              </Link>
            </Typography>
          </Grid>
        </Grid>

        <Grid container width={"50%"}>
          <img src={loginimgae} alt="" />
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
