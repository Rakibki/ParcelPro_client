import { Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import SectionTitle from "../../../components/shared/sectionTitle/SectionTitle";
import about1 from "../../../assets/images/about-1.jpg";
import about2 from "../../../assets/images/about-2.jpg";
import about3 from "../../../assets/images/about-3.jpg";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import aos from "aos";

const About = () => {
  const itemData = [
    {
      img: about1,
    },
    {
      img: about2,
    },
    {
      img: about3,
    },
  ];

  useEffect(() => {
    aos.init();
  }, []);

  return (
    <Grid paddingTop={"50px"} padding={"60px"} bgcolor={"#0e0e0e"}>
      <SectionTitle title={"About"} />

      <Grid marginTop={"30px"} container spacing={6}>
        <Grid width={"50%"} item sx={6}>
          <ImageList sx={{ height: 450 }} variant="woven" cols={3} gap={8}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=161&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>

        <Grid padding={"50px"} width={"50%"} item sx={6}>
          <Grid marginBottom={"20px"}>
            <Typography color={"#f44647"} fontWeight={"800"} variant="p">
              About Us
            </Typography>
          </Grid>

          <Grid marginBottom={"20px"}>
            <Typography fontWeight={"600"} color={"#fff"} variant="h3">
              A big opportunity for your business growth
            </Typography>
          </Grid>

          <Typography
            sx={{ marginBottom: "10px" }}
            color={"#585f66"}
            variant="p"
          >
            Lorem ipsum dolor eletum nulla eu placerat felis etiam tincidunt
            tiam tincidunt orci lacus id varius dolor fermum sit amet orem ipsum
            dolor eletum nulla eu placerat felis etiam tincidunt lacus id varius
            dolor fermum sit amet.
          </Typography>
          <br />
          <br />

          <Typography
            sx={{ marginBottom: "10px" }}
            color={"#585f66"}
            variant="p"
          >
            Lorem ipsum dolor eletum nulla eu placerat felis etiam tincidunt
            tiam tincidunt orci lacus id varius dolor fermum sit amet orem ipsum
            dolor eletum nulla eu placerat felis etiam tincidunt lacus id varius
            dolor fermum sit amet.
          </Typography>
          <br />
          <br />
          <button
            style={{
              fontWeight: "600",
              padding: `10px 20px`,
              backgroundColor: "#f44647",
              color: "#fff",
              borderRadius: "5px"
            }}
          >
            Read More
          </button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
