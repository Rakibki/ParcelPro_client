import counterImage from "../../../assets/images/counter-bg.jpg";
import { Grid, Typography } from "@mui/material";
import useAxiosLocal from "../../../hooks/useAxiosLocal";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { FaUsers } from "react-icons/fa";
import VisibilitySensor from "react-visibility-sensor";

const Count = () => {
  const axiosLocal = useAxiosLocal();
  const [data, setData] = useState({});

  useEffect(() => {
    axiosLocal.get("/count").then((res) => setData(res.data));
  }, []);

  return (
    <Grid
      container
      width={"100%"}
      paddingY={"80px"}
      justifyContent={"center"}
      bgcolor={"#f8fafd"}
    >
      <Grid spacing={2} container width={"auto"}>
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
            paddingX={"25px"}
            paddingY={"15px"}
            item
            border={"1px solid red"}
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
                    {isVisible ? (
                      <CountUp duration={4} end={data?.users} />
                    ) : null}
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
              Number of Users
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Count;
