
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Grid } from "@mui/material";
import brand1 from "../../../assets/images/brands/1.png";
import brand2 from "../../../assets/images/brands/2.png";
import brand3 from "../../../assets/images/brands/3.png";
import brand4 from "../../../assets/images/brands/4.png";
import brand5 from "../../../assets/images/brands/5.png";

const Brands = () => {
  const brands = [brand1, brand2, brand3, brand4, brand3, brand1, brand5, brand2];
  return (
    <Grid padding={6} bgcolor={"#202020"} sx={{}}>
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
          {brands.map((brand, index) => {
            return (
              <SwiperSlide style={{ width: "100%" }} key={index}>
                <Grid sx={{border: "1px solid #f44647", borderRadius: "4px"}}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={brand}
                    alt=""
                  />
                </Grid>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    </Grid>
  );
};

export default Brands;
