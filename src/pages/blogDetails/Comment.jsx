import { Grid, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosLocal from "../../hooks/useAxiosLocal";
import Loader from "../../components/loader/Loader";

const Comment = ({ blogId }) => {
  const AxiosLocal = useAxiosLocal();

  const { isPending, data } = useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      const res = await AxiosLocal.get(`/comments/${blogId}`);
      return res?.data;
    },
  });

  if (isPending) {
    return <Loader />;
  }


  return (
    <Grid marginTop={4}>
      <Typography fontWeight={700} variant="h5">
        Comments ({data?.length})
      </Typography>
    </Grid>
  );
};

export default Comment;
