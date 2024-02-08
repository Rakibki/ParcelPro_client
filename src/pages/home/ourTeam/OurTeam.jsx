import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Grid, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import useAxiosLocal from "../../../hooks/useAxiosLocal";
import Loader from "../../../components/loader/Loader";
import axios from "axios";
import Title from "../../../components/title/Title";

const OurTeam = () => {
  const AxiosLocal = useAxiosLocal();

  const { isPending, data: team } = useQuery({
    queryKey: ["teams"],
    queryFn: async () => {
      const res = await axios.get("ourTeam.json");
      return res?.data;
    },
  });

  if (isPending) {
    return <Loader />;
  }

  return (
    <Grid bgcolor={"#f9fbfe"} marginY={"50px"}>
      <Title title="Our professionals" desc="Meet our dedicated team" />
      <>
        <Swiper
          slidesPerView={5}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {team?.map((item, index) => {
            return (
              <SwiperSlide
                style={{
                  width: "100%",
                  padding: "20px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#fff",
                }}
                key={index}
              >
                <Grid sx={{ borderRadius: "4px" }}>
                  <img src={item?.imgae} alt="" />
                  <Typography>{item?.name}</Typography>
                  <Typography>{item?.position}</Typography>
                </Grid>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    </Grid>
  );
};

export default OurTeam;
