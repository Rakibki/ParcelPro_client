import banner_bg from "../../../assets/images/banner-bg-1.jpg";
import banner_shap from "../../../assets/images/banner-shape-1.png";
import { Box, Grid, Typography } from "@mui/material";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <Grid columns={11} paddingTop={"80px"} height={"100%"} container>
      <Grid
        sx={{
          backgroundImage: `url(${banner_shap})`,
          backgroundPosition: "center",
        }}
        item
        xs={5}
      >
        <Box marginTop={"60px"} padding={"20px"}>
          <Typography
            bgcolor={"#fde0db"}
            color={"#f76649"}
            fontWeight={500}
            padding={"8px 16px"}
            borderRadius={"10px"}
            border={"1px solid #f76649"}
            variant="p"
          >
            Welcome to Matro
          </Typography>
          <Typography
            color={"#1f2428"}
            marginBottom={"10px"}
            marginTop={"30px"}
            fontWeight={700}
            variant="h3"
          >
            We are Matro transport and logistics company
          </Typography>
          <Typography color={"#1f2428"} variant="p">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas,
            quidem illum? Recusandae tempora sed sit nam, libero, quasi
            inventore labore quae non aperiam quisquam corporis enim! Laboriosam
            dolores cum velit.
          </Typography>

          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              borderRadius: "5px",
              fontFamily: "cursive",
              marginTop: "20px",
              padding: `10px 30px`,
              backgroundColor: "#f76649",
              color: "#fff",
            }}
          >
            Request quotes <FaArrowRight />
          </button>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <img width={"100%"} height={"700px"} src={banner_bg} alt="" />
      </Grid>
    </Grid>
  );
};

export default Banner;
