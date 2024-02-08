import { Grid, Typography } from "@mui/material";
import React from "react";

const SectionTitle = ({ title, color = "#fff" }) => {
  return (
    <Grid sx={{ width: "100%" }}>
      <Grid sx={{ maxWidth: "50%", marginX: "auto" }}>
        <Typography
          fontWeight={"600"}
          color={color}
          marginBottom={"10px"}
          textAlign={"center"}
          variant="h4"
        >
          {title}
        </Typography>
        <Grid
          sx={{
            marginBottom: "2px",
            width: "30%",
            marginX: "auto",
            borderRadius: "3px",
            border: "1px solid #636363",
          }}
        ></Grid>
        <Grid
          sx={{
            width: "40%",
            marginX: "auto",
            borderRadius: "5px",
            border: "3px solid #f44647",
          }}
        ></Grid>
        <Grid
          sx={{
            marginTop: "2px",
            width: "30%",
            marginX: "auto",
            borderRadius: "3px",
            border: "1px solid #636363",
          }}
        ></Grid>
      </Grid>
    </Grid>
  );
};

export default SectionTitle;
