import { Grid } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import PostAddIcon from '@mui/icons-material/PostAdd';
import SubjectIcon from '@mui/icons-material/Subject';

const UserMenu = () => {
  return (
    <Grid fontSize={18} paddingX={4}>
      <Grid marginBottom={1}>
        <NavLink to={"/dashboard/bookParcel"}><PostAddIcon /> Book a Parcel</NavLink>
      </Grid>
      <Grid marginBottom={1}>
        <NavLink to={"/dashboard/myParcel"}><SubjectIcon /> My Parcels</NavLink>
      </Grid>
    </Grid>
  );
};

export default UserMenu;
