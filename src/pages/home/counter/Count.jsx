import counterImage from "../../../assets/images/counter-bg.jpg";
import { Grid, Typography } from "@mui/material";
import useAxiosLocal from "../../../hooks/useAxiosLocal";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const Count = () => {
  const axiosLocal = useAxiosLocal();
  const [data, setData] = useState({});

  useEffect(() => {
    axiosLocal.get("/count").then((res) => setData(res.data));
  }, []);

  console.log(data);

  return (
    <Grid
      paddingX={"100px"}
      container
      paddingY={"50px"}
      width={"100%"}
      justifyContent={"center"}
      sx={{ backgroundImage: `url(${counterImage})` }}
    >
      <Grid spacing={2} container width={"auto"}>
        <Grid
          marginRight={"15px"}
          borderRadius={"10px"}
          paddingX={"60px"}
          paddingY={"20px"}
          bgcolor={"#f44647"}
          item
          sx={4}
        >
          <Typography
            textAlign={"center"}
            color={"#fff"}
            fontWeight={"600"}
            variant="h2"
          >
            <CountUp duration={2.75} end={data?.users} />
          </Typography>
          <Typography
            textAlign={"center"}
            color={"#fff"}
            fontWeight={"600"}
            variant="h6"
          >
            users
          </Typography>
        </Grid>

        <Grid
          borderRadius={"10px"}
          paddingX={"60px"}
          paddingY={"20px"}
          marginRight={"15px"}
          bgcolor={"#f44647"}
          item
          sx={4}
        >
          <Typography
            textAlign={"center"}
            color={"#fff"}
            fontWeight={"600"}
            variant="h2"
          >
            <CountUp duration={2.75} end={data?.ParcelBooked} />
          </Typography>
          <Typography
            textAlign={"center"}
            color={"#fff"}
            fontWeight={"600"}
            variant="h6"
          >
            Parcel Booked
          </Typography>
        </Grid>

        <Grid
          borderRadius={"10px"}
          paddingX={"60px"}
          paddingY={"20px"}
          bgcolor={"#f44647"}
          marginRight={"15px"}
          item
          sx={4}
        >
          <Typography
            textAlign={"center"}
            color={"#fff"}
            fontWeight={"600"}
            variant="h2"
          >
            <CountUp duration={2.75} end={data?.ParcelDelivered} />
          </Typography>
          <Typography
            textAlign={"center"}
            color={"#fff"}
            fontWeight={"600"}
            variant="h6"
          >
            Parcel Delivered
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Count;
