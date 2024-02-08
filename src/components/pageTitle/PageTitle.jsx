import { Grid, Typography } from "@mui/material";
import pageTitleShape1 from "../../assets/images/page-title-shape-1.png";
import pageTitleShape2 from "../../assets/images/page-title-shape-2.png";

const PageTitle = ({ title }) => {
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "100px",
      }}
    >
      <Grid sx={{ position: "relative" }}>
        <img src={pageTitleShape1} alt="" />
        <Grid sx={{ position: "absolute", top: "40%", paddingLeft: "40px" }}>
          <Typography color={"#1f2428"} fontWeight={700} variant="h4">
            {title}
          </Typography>
          <Typography>
            {" "}
            Home / <span style={{ color: "#f76649" }}>{title}</span>
          </Typography>
        </Grid>
      </Grid>
      <Grid>
        <img src={pageTitleShape2} alt="" />
      </Grid>
    </Grid>
  );
};

export default PageTitle;
