import { Grid, Typography } from "@mui/material";
import logisticsSolutions from "../../../assets/images/logistics-solutions-img.jpg";
import { LuWarehouse } from "react-icons/lu";

const Solution = () => {
  return (
    <Grid marginY={"40px"} container>
      <Grid item xs={6}>
        <Typography color={"#f76649"} variant="p">
          Logistics solutions
        </Typography>

        <Grid>
          <Typography
            marginTop={"10px"}
            fontWeight={700}
            color={"#1e2327"}
            variant="h3"
          >
            We provide the best solution for you
          </Typography>
        </Grid>

        <Grid
          bgcolor={"#fff"}
          zIndex={3}
          marginRight={"-80px"}
          padding={"10px"}
        >
          <Grid
            sx={{
              ":hover": {
                border: "1px solid #f76649",
                transition: ".5s",
                "& .iconDiv": {
                  backgroundColor: "#f76649",
                  transition: ".5s",
                },
              },
            }}
            border={"1px solid #ebebeb"}
            padding={"20px"}
            borderRadius={"8px"}
            marginTop={"10px"}
            container
            spacing={2}
          >
            <Grid
              className="iconDiv"
              container
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"100%"}
              padding={"25px"}
              item
              bgcolor={"#1f2428"}
              xs={2}
            >
              <Grid marginLeft={"6px"} xs={12} item>
                <LuWarehouse color="#fff" size={"100%"} />
              </Grid>
            </Grid>
            <Grid item xs={10}>
              <Typography marginBottom={"6px"} variant="h5">
                Warehouse solutions
              </Typography>
              <Typography variant="p">
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a
                lorem ipsum dolor sit amet tincidunt nibh pulvinar eget
                tincidunt.
              </Typography>
            </Grid>
          </Grid>

          <Grid
            sx={{
              ":hover": {
                border: "1px solid #f76649",
                transition: ".5s",
                "& .iconDiv": {
                  backgroundColor: "#f76649",
                  transition: ".5s",
                },
              },
            }}
            border={"1px solid #ebebeb"}
            padding={"20px"}
            borderRadius={"8px"}
            marginTop={"10px"}
            container
            spacing={2}
          >
            <Grid
              className="iconDiv"
              container
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"100%"}
              padding={"25px"}
              item
              bgcolor={"#1f2428"}
              xs={2}
            >
              <Grid marginLeft={"6px"} xs={12} item>
                <LuWarehouse color="#fff" size={"100%"} />
              </Grid>
            </Grid>
            <Grid item xs={10}>
              <Typography marginBottom={"6px"} variant="h5">
                Warehouse solutions
              </Typography>
              <Typography variant="p">
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a
                lorem ipsum dolor sit amet tincidunt nibh pulvinar eget
                tincidunt.
              </Typography>
            </Grid>
          </Grid>

          <Grid
            sx={{
              ":hover": {
                border: "1px solid #f76649",
                transition: ".5s",
                "& .iconDiv": {
                  backgroundColor: "#f76649",
                  transition: ".5s",
                },
              },
            }}
            border={"1px solid #ebebeb"}
            padding={"20px"}
            borderRadius={"8px"}
            marginTop={"10px"}
            container
            spacing={2}
          >
            <Grid
              className="iconDiv"
              container
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"100%"}
              padding={"25px"}
              item
              bgcolor={"#1f2428"}
              xs={2}
            >
              <Grid marginLeft={"6px"} xs={12} item>
                <LuWarehouse color="#fff" size={"100%"} />
              </Grid>
            </Grid>
            <Grid item xs={10}>
              <Typography marginBottom={"6px"} variant="h5">
                Warehouse solutions
              </Typography>
              <Typography variant="p">
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a
                lorem ipsum dolor sit amet tincidunt nibh pulvinar eget
                tincidunt.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid zIndex={-54} item xs={6}>
        <img src={logisticsSolutions} alt="logisticsSolutions" />
      </Grid>
    </Grid>
  );
};

export default Solution;
