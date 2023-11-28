import React, { useContext, useState } from "react";
import loginimgae from "../../assets/images/login1.png";
import SocialLogin from "../../components/socialLogin/SocialLogin";
import { Link } from "react-router-dom";
import { authContext } from "../../providers/authProvider/AuthProvider";
import uploadeImage from "../../api/uploadeImage";
import { createUserDB, createToken } from "../../api/auth";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import styled from "@emotion/styled";
import PrimayButton from "../../components/shared/button/PrimayButton";

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

const Register = () => {
  const { createUser, updaetUserProfile } = useContext(authContext);
  const [role, setRole] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // const role = e.target.role.value;
    const imageFile = e.target.imageFile.files[0];
    const image = await uploadeImage(imageFile);

    createUser(email, password)
      .then((res) => {
        updaetUserProfile(name, image)
          .then(async (res) => {
            const user = {
              email,
              name,
              role,
              image,
            };
            const logginUser = { logginUser: email };
            if (user) {
              createUserDB(user);
              createToken(logginUser);
            }
          })
          .catch((e) => console.log(e.message));
      })
      .catch((e) => console.log(e.message));
  };

  const handleChange = (e) => {
    setRole(e.target.value);
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
          height={"630px"}
          bgcolor={"#fff"}
          padding={"20px"}
          width={"50%"}
        >
          <Typography marginTop={"20px"} textAlign={"center"} variant="h5">
            Create an account
          </Typography>

          <form
            style={{ overflow: "hidden", padding:"30px" }}
            onSubmit={handleRegister}
          >
            <TextField
              id="outlined-basic"
              sx={{ width: "100%", marginBottom: "10px" }}
              name="name"
              label="Full Name"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              name="email"
              label="Email Address"
              sx={{ width: "100%", marginBottom: "10px" }}
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              name="password"
              label="Passsword"
              sx={{ width: "100%", marginBottom: "10px" }}
              variant="outlined"
            />

            <Grid>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select Role
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Select Role"
                  onChange={handleChange}
                  sx={{marginBottom: "10px"}}
                >
                  <MenuItem value={"Delivery_Men"}>Delivery Men</MenuItem>
                  <MenuItem value={"user"}>User</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid>
              <Button
                component="label"
                variant="contained"
                startIcon={<ArrowCircleUpIcon />}
              >
                Upload Image
                <VisuallyHiddenInput name="imageFile" type="file" />
              </Button>
            </Grid>

            <Grid overflow={"hidden"} container justifyContent={"center"}>
              {/* <Button color="red" bgcolor={"#2ad4bc"} >  className="px-4 py-3 rounded-lg text-white font-semibold bg-[]"
                Register
              </Button> */}
              <PrimayButton size={"100%"}>Register</PrimayButton>
            </Grid>
          </form>

          <SocialLogin />
          <Grid container justifyContent={"center"}>
            <Typography variant="p">
              Already have an account?{" "}
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

export default Register;
