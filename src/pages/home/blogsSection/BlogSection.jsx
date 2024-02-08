import axios from "axios";
import Loader from "../../../components/loader/Loader";
import { useQuery } from "@tanstack/react-query";
import SingleBlog from "../../../components/singleBlog/SingleBlog";
import Title from "../../../components/title/Title";
import { Grid } from "@mui/material";
import useAxiosLocal from "../../../hooks/useAxiosLocal";

const BlogSection = () => {
  const axiosLocal = useAxiosLocal();

  const { isPending, data } = useQuery({
    queryKey: ["blog"],
    queryFn: async () => {
      const res = await axiosLocal.get("/blogs");
      return res?.data;
    },
  });

  if (isPending) {
    return <Loader />;
  }

  return (
    <Grid bgcolor={"#f9fbfe"} marginY={10}>
      <Title desc="Latest blog posts" title={"Blog post"} />
      <Grid container spacing={2}>
        {data.map((blog) => (
          <SingleBlog key={blog.id} blog={blog} />
        ))}
      </Grid>
    </Grid>
  );
};

export default BlogSection;
