import { Grid } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import SubjectIcon from '@mui/icons-material/Subject';
import StarsIcon from '@mui/icons-material/Stars';


const DeliveryMenMenu = () => {
  return (
    <Grid fontSize={18} paddingX={4}>
      <Grid marginBottom={1}>
        <NavLink to={"/dashboard/MyDeliveryList"}><SubjectIcon /> My Delivery List</NavLink>
      </Grid>
      <Grid marginBottom={1}>
        <NavLink to={"/dashboard/MyReviews"}><StarsIcon /> My Reviews</NavLink>
      </Grid>
    </Grid>
  );
};

export default DeliveryMenMenu;
