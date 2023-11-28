import React, { useContext } from "react";
import loginimgae from "../../assets/images/login1.png";
import { Button, Grid, TextField, Typography } from "@mui/material";
import SocialLogin from "../../components/socialLogin/SocialLogin";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../providers/authProvider/AuthProvider";
import PrimayButton from "../../components/shared/button/PrimayButton";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";

const Login = () => {
  const { singUser } = useContext(authContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
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

          <form
            style={{ overflow: "hidden", padding: "20px" }}
            onSubmit={handleLogin}
          >
            <TextField
              id="outlined-basic"
              name="email"
              label="Email Address"
              variant="outlined"
              sx={{ width: "100%", marginBottom: "10px" }}
            />
            <TextField
              id="outlined-basic"
              sx={{ width: "100%", marginBottom: "10px" }}
              name="password"
              label="Passsword"
              variant="outlined"
            />

            <Grid overflow={"hidden"} container justifyContent={"center"}>
              <PrimayButton size="100%">Login</PrimayButton>
            </Grid>
          </form>

          <SocialLogin />
          <Grid container justifyContent={"center"}>
            <Typography variant="p">
              Have an account?{" "}
              <Link
                className="hover:underline hover:text-[#2ad4bc]"
                to={"/register"}
              >
                {" "}
                Sign In{" "}
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
