import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import useAxiosLocal from "../../hooks/useAxiosLocal";
import { Grid, Typography } from "@mui/material";
import PageTitle from "../../components/pageTitle/PageTitle";
import { CiCalendar } from "react-icons/ci";
import "./style.css";
import { IoSearchOutline } from "react-icons/io5";
import Popularposts from "../../components/Popular posts/Popularposts";
import Comment from "./Comment";

const BlogDetails = () => {
  const { id } = useParams();
  const axiosLocal = useAxiosLocal();

  const { isPending, data } = useQuery({
    queryKey: ["blog-details"],
    queryFn: async () => {
      const res = await axiosLocal.get(`/blog/${id}`);
      return res?.data;
    },
  });

  if (isPending) {
    return <Loader />;
  }

  return (
    <Grid>
      <PageTitle title={"Blog details"} />

      <Grid container marginTop={2} spacing={2}>
        <Grid item xs={8}>
          <img src={data?.image} alt="" />

          <Grid marginTop={1}>
            <Typography
              alignItems={"center"}
              gap={1}
              display={"flex"}
              marginBottom={1}
              marginTop={1}
            >
              <CiCalendar color="#f76649" size={"20px"} /> {data?.publishedDate}{" "}
              | {data?.category}
            </Typography>
          </Grid>

          <Grid marginTop={2}>
            <Typography fontWeight={600} variant="h4">
              {data?.title}
            </Typography>
            <Typography marginTop={2}>{data?.desc}</Typography>
          </Grid>

          <Grid marginTop={4} alignItems={"center"} container spacing={1}>
            <Grid item xs={2}>
              <img src={data?.author?.image} alt="" />
            </Grid>
            <Grid xs={10}>
              <Typography fontWeight={700} variant="h5">
                {data?.author?.name}
              </Typography>
              <Typography marginBottom={1}>{data?.author?.email}</Typography>
              <Typography>
                Lorem ipsum dolor sit amet convoluptate. Reprehenderit, fugiat
                quisquam id delectus commodi esse nam repellendus minima
                aspernatur perferendis est ea perspiciatis laudantium adipisci,
                explicabo ex? Sapiente labore corrupti ex qui.
              </Typography>
            </Grid>
          </Grid>

          {/* comment container */}
          <Grid marginTop={4}>
            <Comment blogId={data?.blogId} />
          </Grid>
        </Grid>

        <Grid item xs={4}>
          <Grid sx={{ display: "flex" }}>
            <Grid width={"100%"}>
              <input
                style={{
                  width: "100%",
                  padding: "14px 20px",
                  borderRadius: "10px 0 0 10px",
                  outline: "none",
                  border: "1px solid #e1e1e1",
                  marginTop: "5px",
                  boxSizing: "border-box",
                }}
                placeholder="Search..."
                className="inputFild"
                type="text"
              />
            </Grid>
            <Grid>
              <button
                style={{
                  fontWeight: "600",
                  backgroundColor: "#f76649",
                  color: "#fff",
                  padding: "15px",
                  boxSizing: "border-box",
                  borderRadius: "0 10px 10px 0",
                }}
              >
                <IoSearchOutline size={"24px"} />
              </button>
            </Grid>
          </Grid>

          <Grid marginTop={4}>
            <Typography marginBottom={2} fontWeight={700} variant="h5">
              Popular posts
            </Typography>
            <Grid>
              <Popularposts />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BlogDetails;
