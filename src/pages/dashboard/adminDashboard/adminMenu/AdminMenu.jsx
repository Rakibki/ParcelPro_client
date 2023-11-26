import React from "react";
import { NavLink } from "react-router-dom";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import { Grid } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import CategoryIcon from "@mui/icons-material/Category";

const AdminMenu = () => {
  return (
    <Grid fontSize={18} paddingX={4}>
      <Grid marginBottom={1}>
        <NavLink to={"/dashboard/statistics"}>
          <StackedLineChartIcon /> Statistics
        </NavLink>
      </Grid>
      <Grid marginBottom={1}>
        <NavLink to={"/dashboard/AllParcels"}>
          <CategoryIcon /> All Parcels
        </NavLink>
      </Grid>
      <Grid marginBottom={1}>
        <NavLink to={"/dashboard/users"}>
          <GroupIcon /> All users
        </NavLink>
      </Grid>
      <Grid marginBottom={1}>
        <NavLink to={"/dashboard/deliveryMen"}>
          <DirectionsBikeIcon /> All Delivery Men
        </NavLink>
      </Grid>
    </Grid>
  );
};

export default AdminMenu;
