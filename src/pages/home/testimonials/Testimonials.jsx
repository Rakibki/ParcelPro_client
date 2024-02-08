import { useQuery } from "@tanstack/react-query";
import useAxiosLocal from "../../../hooks/useAxiosLocal";
import Loader from "../../../components/loader/Loader";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Grid, Typography } from "@mui/material";
import Title from "../../../components/title/Title";

const Testimonials = () => {
  const AxiosLocal = useAxiosLocal();

  const { isPending, data: Testimonials } = useQuery({
    queryKey: ["Testimonials"],
    queryFn: async () => {
      const res = await axios.get("/Testimonials.json");
      return res?.data;
    },
  });

  if (isPending) {
    return <Loader />;
  }

  return (
    <div>
      <Grid marginBottom={"-100px"}>
        <Title title={"Testimonials"} desc="What people's say about us" />
      </Grid>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {Testimonials?.map((item, index) => {
          return (
            <SwiperSlide style={{ padding: "120px" }} key={index}>
              <Typography width={"70%"} marginX={"auto"} textAlign={"center"}>
                {item.message}
              </Typography>
              <Grid marginTop={"10px"} container justifyContent={"center"}>
                <Grid>
                  <img
                    style={{
                      width: "100px",
                      margin: "0 auto",
                      borderRadius: "5px",
                    }}
                    src={item?.image}
                    alt=""
                  />
                  <Typography
                    fontWeight={600}
                    marginTop={"10px"}
                    variant="h6"
                    textAlign={"center"}
                  >
                    {item.name}
                  </Typography>
                  <Typography textAlign={"center"}>{item.position}</Typography>
                </Grid>
              </Grid>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
