import { Grid } from "@mui/material";
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
    <Grid padding={6} bgcolor={"#0e0e0e"}>
      {data?.map((item) => (
        <Grid key={item._id}>
          <img src={item?.image} alt="" />
        </Grid>
      ))}
    </Grid>
  );
};

export default Services;
