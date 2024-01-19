import loadding from "../../../public/loadding.json";
import Lottie from "lottie-react";
import { Grid } from "@mui/material";

const Loader = () => {
  return (
    <Grid container height={"100vh"} justifyContent={"center"} alignItems={"center"}>
      <Grid width={"20%"}>
        <Lottie animationData={loadding} loop={true} />
      </Grid>
    </Grid>
  );
};

export default Loader;
