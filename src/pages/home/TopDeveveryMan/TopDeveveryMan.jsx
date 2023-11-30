import React, { useRef, useState } from "react";
import { getAllDeliveryMen } from "../../../api/auth";
import SectionTitle from "../../../components/shared/sectionTitle/SectionTitle";
import { Grid, Rating, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../components/loader/Loader";

const TopDeveveryMan = () => {
  const axiosSecure = useAxiosSecure();

  const {
    isPending,
    error,
    data: topDeliverMan,
  } = useQuery({
    queryKey: ["topDeliverMan"],
    queryFn: async () => {
      const res = await axiosSecure.get("topFiveFeliveryMan");
      return res;
    },
  });

  if (isPending) {
    return <Loader />;
  }

  return (
    <Grid minHeight={"100vh"} bgcolor={"#202020"}>
      <Grid paddingTop={"60px"}>
        <SectionTitle title={"Top Five Delivery Man"} />
      </Grid>

      <Grid
        sx={{
          width: "60%",
          marginX: "auto",
          marginTop: "50px",
          border: "2px solid #272727",
        }}
      >
        {topDeliverMan?.data?.length > 0 && (
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            {topDeliverMan?.data.map((item) => {
              return (
                <SwiperSlide style={{ padding: "50px" }}>
                  <Grid sx={{ width: "24%", marginX: "auto" }}>
                    <img
                      style={{ borderRadius: "100%" }}
                      src={item.image}
                      alt=""
                    />
                  </Grid>
                  <Typography
                    variant="h4"
                    marginTop={"10px"}
                    textAlign={"center"}
                    color={"#fff"}
                    component="h2"
                  >
                    {item.name}
                  </Typography>

                  <Grid marginTop={"20px"} container justifyContent={"center"}>
                    <Rating
                      sx={{ color: "#f44647" }}
                      name="read-only"
                      value={4}
                      readOnly
                    />
                  </Grid>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </Grid>
    </Grid>
  );
};

export default TopDeveveryMan;
