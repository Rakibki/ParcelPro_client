import { Grid, Typography } from "@mui/material";
import { CiCalendar } from "react-icons/ci";
import { HiPlusCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

const SingleBlog = ({ blog }) => {
  return (
    <Grid
      style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
      bgcolor={"#fff"}
      padding={2}
      item
      xs={4}
    >
      <img src={blog?.image} alt="" />
      <Typography
        alignItems={"center"}
        gap={1}
        display={"flex"}
        marginBottom={1}
        marginTop={1}
      >
        <CiCalendar color="#f76649" size={"20px"} /> {blog?.publishedDate} |{" "}
        {blog?.category}
      </Typography>

      <Typography variant="h6">{blog?.title}</Typography>
      <Typography marginTop={2} display={"block"} variant="p">
        {blog?.desc?.slice(0, 200)}...
      </Typography>

      <Link to={`/blog/${blog?.blogId}`}>
        <Grid marginTop={2} alignItems={"center"} gap={1} display={"flex"}>
          <Typography>Read More</Typography>
          <HiPlusCircle />
        </Grid>
      </Link>
    </Grid>
  );
};

export default SingleBlog;
