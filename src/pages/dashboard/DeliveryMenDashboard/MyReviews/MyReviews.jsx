import React, { useContext, useState } from "react";
import { authContext } from "../../../../providers/authProvider/AuthProvider";
import getIdbyEmail from "../../../../api/getIdbyEmail";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, Rating } from "@mui/material";

const MyReviews = () => {
  const { user } = useContext(authContext);
  const axiosSecure = useAxiosSecure();

  const { isPending, error, data } = useQuery({
    queryKey: ["myReciew"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myReviews/${user?.email}`);
      return res?.data;
    },
  });


  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  return (
    <Grid sx={{ marginLeft: "10px" }} container>
      {data?.length < 0 && <Typography variant="h5">No Reviews</Typography>}
      {data?.length > 0 &&
        data?.map((book) => {
          return (
            <Grid xs={4} item sx={{ border: "2px solid #f44647" }}>
              <CardContent>
                <Grid sx={{ width: "40%", marginX: "auto" }}>
                  <img
                    style={{ borderRadius: "100%" }}
                    src={book.image}
                    alt=""
                  />
                </Grid>

                <Typography
                  marginTop={"20px"}
                  textAlign={"center"}
                  variant="h5"
                  component="div"
                >
                  {book?.name}
                </Typography>

                <Grid marginTop={"2px"} container justifyContent={"center"}>
                  <Rating
                    sx={{ color: "#f44647" }}
                    name="read-only"
                    value={book.ratting}
                    readOnly
                  />
                </Grid>
              </CardContent>
              <Grid container justifyContent={"center"}>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Grid>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default MyReviews;
