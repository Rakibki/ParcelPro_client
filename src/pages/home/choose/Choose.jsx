import { Grid } from "@mui/material";
import chooseUsImg from "../../../assets/images/choose-us-img.png";
import chooseUsShape from "../../../assets/images/choose-us-shape-1.png";
import chooseUsShape2 from "../../../assets/images/choose-us-shape-2.png";

const Choose = () => {
  return (
    <Grid paddingY={"40px"} container spacing={4}>
      <Grid position={"relative"} item xs={6}>
        <Grid position={"absolute"}>
          <img src={chooseUsImg} alt="" />
        </Grid>
        <Grid position={"absolute"}>
          <img src={chooseUsShape} alt="" />
        </Grid>
        <Grid position={"absolute"}>
          <img src={chooseUsShape2} alt="" />
        </Grid>
      </Grid>
      <Grid item xs={6}>
        
      </Grid>
    </Grid>
  );
};

export default Choose;
