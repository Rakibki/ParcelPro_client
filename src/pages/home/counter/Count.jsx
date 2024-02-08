import counterImage from "../../../assets/images/counter-bg.jpg";
import { Grid, Typography } from "@mui/material";
import useAxiosLocal from "../../../hooks/useAxiosLocal";
import { useEffect, useState } from "react";
import CountItem from "./CountItem";
import { FaUsers } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineBookmarkAdded } from "react-icons/md";

const Count = () => {
  const axiosLocal = useAxiosLocal();
  const [data, setData] = useState({});

  useEffect(() => {
    axiosLocal.get("/count").then((res) => setData(res.data));
  }, []);

  console.log(data);

  return (
    <Grid container justifyContent={"center"}>
      <Grid
        paddingLeft={"60px"}
        container
        width={"100%"}
        paddingY={"80px"}
        justifyContent={"center"}
        spacing={6}
        bgcolor={"#f8fafd"}
      >
        <Grid container justifyContent={"center"} item xs={4}>
          <CountItem
            end={data?.users}
            text={"Number of Users"}
            Icon={FaUsers}
          />
        </Grid>
        <Grid container justifyContent={"center"} item xs={4}>
          <CountItem
            Icon={MdOutlineBookmarkAdded}
            end={data?.ParcelBooked}
            text={"Parcel Booked"}
          />
        </Grid>
        <Grid container justifyContent={"center"} item xs={4}>
          <CountItem
            Icon={CiDeliveryTruck}
            end={data?.ParcelDelivered}
            text={"Parcel Delivered"}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Count;
