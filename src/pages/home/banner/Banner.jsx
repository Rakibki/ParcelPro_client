import React from "react";
import bannerimage from "../../../assets/images/slider-3.jpg";
import { Grid, Stack, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Banner = () => {
  return (
    <Grid overflow={"hidden"} position={"relative"} height={"100vh"}>
      <img
        style={{
          position: "absolute",
          top: "0",
          width: "100%",
          height: "100%",
        }}
        src={bannerimage}
        alt=""
      />
      <Grid
        sx={{
          opacity: "90%",
          borderRadius: "10px",
          border: "3px solid #f79999",
        }}
        zIndex={"1000"}
        position={"absolute"}
        top={"150px"}
        left={"100px"}
        bgcolor={"#f44647"}
        width={"40%"}
        padding={"30px"}
        height={"60%"}
      >
        <Typography marginBottom={"5px"} color={"#fff"} variant="h6">
          Hello Dears! We Will Help
        </Typography>
        <Typography  marginBottom={"10px"} color={"#fff"} variant="h4">
          Fast Delivery Services
        </Typography>
        <Typography variant="p" color={"#fff"}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed et eletum
          nulla eu placerat felis etiam tincidunt orci lacus id varius dolor
          fermum sit eletum nulla eu placerat felis etiam tincidunt orci lacus
          id varius dolor fermum sit amet.
        </Typography>
        <Grid position={"relative"} marginTop={"50px"} width={"100%"} item>
          <input
            style={{
              border: "4px solid #333537",
              padding: "12px",
              outline: "none",
              fontSize: "18px",
              width: "100%",
              borderRadius: "30px",
            }}
            type="text"
          />
          <SearchIcon
            sx={{
              fontSize: "40px",
              position: "absolute",
              top: "10px",
              right: "20px",
              color: "#f44647"
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Banner;
