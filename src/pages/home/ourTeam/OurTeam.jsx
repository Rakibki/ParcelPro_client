import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Grid } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import useAxiosLocal from "../../../hooks/useAxiosLocal";
import Loader from "../../../components/loader/Loader";

const OurTeam = () => {
  const AxiosLocal = useAxiosLocal();

  const { isPending, data: team } = useQuery({
    queryKey: ["teams"],
    queryFn: async () => {
      const res = await AxiosLocal.get("/team");
      return res?.data;
    },
  });

  console.log(team);

  if (isPending) {
    return <Loader />;
  }

  return (
    <div>
      <>
        <Swiper
          slidesPerView={5}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {team.map((brand, index) => {
            return (
              <SwiperSlide style={{ width: "100%" }} key={index}>
                <Grid sx={{ border: "1px solid #f44647", borderRadius: "4px" }}>
                  jkdfhjdsiofjhdsf
                </Grid>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    </div>
  );
};

export default OurTeam;
