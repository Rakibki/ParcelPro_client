import { Grid, Typography } from "@mui/material";
import useAxiosLocal from "../../../hooks/useAxiosLocal";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../components/loader/Loader";

const Services = () => {
  const AxiosLocal = useAxiosLocal();

  const { isPending, data } = useQuery({
    queryKey: ["ourServices"],
    queryFn: async () => {
      const res = await AxiosLocal.get("/services");
      return res?.data;
    },
  });

  if (isPending) {
    return <Loader />;
  }

  return (
    <Grid container spacing={6} bgcolor={"#fff"}>
      {data?.map((item) => (
        <Grid
          style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
          padding={5}
          bgcolor={"#f9fbfe"}
          item
          xs={3}
          key={item._id}
        >
          <img style={{ width: "100%" }} src={item?.image} alt="" />
          <Typography
            marginTop={"15px"}
            marginBottom={"10px"}
            textAlign={"center"}
            fontSize={"18px"}
            variant="h6"
          >
            {item?.title}
          </Typography>
          <Typography
            marginTop={"15px"}
            textAlign={"center"}
            fontSize={"15px"}
            variant="p"
          >
            {item?.desc?.slice(0, 100)}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default Services;
