import { useQuery } from "@tanstack/react-query";
import useAxiosLocal from "../../hooks/useAxiosLocal";
import Loader from "../loader/Loader";
import { Grid, Typography } from "@mui/material";

const Popularposts = () => {
  const axiosLocal = useAxiosLocal();

  const { isPending, data } = useQuery({
    queryKey: ["populerblog"],
    queryFn: async () => {
      const res = await axiosLocal.get("/blogs");
      return res?.data;
    },
  });

  if (isPending) {
    return <Loader />;
  }

  return (
    <Grid>
      {data?.map((item) => {
        return (
          <Grid marginBottom={2} container spacing={2} key={item?.blogId}>
            <Grid item xs={3}>
              <img src={item?.image} alt="" />
            </Grid>
            <Grid item xs={9}>
              <Typography>{item?.title}</Typography>
              <Typography>{item?.publishedDate}</Typography>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Popularposts;
