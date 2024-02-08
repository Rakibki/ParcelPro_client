import { Grid, Typography } from "@mui/material";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const CountItem = ({ end, Icon, text }) => {
  return (
    <Grid spacing={2} container width={"auto"}>
      <Grid position={"relative"}>
        <Grid
          container
          justifyContent={"center"}
          borderRadius={"10px"}
          alignItems={"center"}
          // bgcolor={"#fff"}
          item
          sx={4}
        >
          <Grid
            zIndex={10}
            paddingX={"25px"}
            paddingY={"15px"}
            item
            border={"1px solid #f76649"}
          >
            <VisibilitySensor partialVisibility offset={{}}>
              {({ isVisible }) => (
                <div style={{ height: 100 }}>
                  <Typography
                    textAlign={"center"}
                    color={"#f76649"}
                    fontWeight={"600"}
                    variant="h2"
                  >
                    {isVisible ? <CountUp duration={4} end={end} /> : null}
                  </Typography>
                </div>
              )}
            </VisibilitySensor>
            <Typography
              color={"#1f2428"}
              textAlign={"center"}
              fontWeight={"600"}
              variant="h6"
              marginTop={"-30px"}
            >
              {text}
            </Typography>
          </Grid>
        </Grid>

        <Grid
          top={"-20px"}
          right={"100px"}
          position={"absolute"}
          container
          marginRight={"20px"}
          border={"1px solid #ebebeb"}
          borderRadius={"10px"}
          alignItems={"center"}
          bgcolor={"#fff"}
          width={"100%"}
          height={"100%"}
          item
          sx={4}
        >
          <Grid paddingX={"25px"} paddingY={"15px"} item>
            <Icon size={"60px"} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CountItem;
