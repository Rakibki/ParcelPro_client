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
import Title from "../../../components/title/Title";

const TopDeveveryMan = () => {
  const axiosSecure = useAxiosSecure();

  const { isPending, data: topDeliverMan } = useQuery({
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
    <Grid marginY={7} minHeight={"100vh"} bgcolor={"#fff"}>
      <Grid paddingTop={"60px"}>
        <Title title={"Top Five Delivery Man"} desc={"Lorem, ipsum dolor."} />
      </Grid>

      <Grid
        sx={{
          width: "60%",
          marginX: "auto",
          marginTop: "50px",
          border: "1px solid #f76649",
          borderRadius: "6px",
        }}
      >
        {topDeliverMan?.data?.length > 0 && (
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            {topDeliverMan?.data.map((item, index) => {
              return (
                <SwiperSlide key={index} style={{ padding: "50px" }}>
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
                    color={"#f76649"}
                    component="h2"
                  >
                    {item.name}
                  </Typography>

                  <Grid marginTop={"20px"} container justifyContent={"center"}>
                    <Rating
                      sx={{ color: "#f76649" }}
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
