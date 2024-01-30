import { Grid, Typography } from "@mui/material";
import chooseUsImg from "../../../assets/images/choose-us-img.png";
import chooseUsShape from "../../../assets/images/choose-us-shape-1.png";
import chooseUsShape2 from "../../../assets/images/choose-us-shape-2.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Choose = () => {
  return (
    <Grid marginY={"150px"} container spacing={4}>
      <Grid position={"block"} item xs={6}>
        <Grid position={"relative"}>
          <Grid zIndex={7} position={"absolute"}>
            <img src={chooseUsImg} alt="" />
          </Grid>
          <Grid position={"absolute"}>
            <img src={chooseUsShape} alt="" />
          </Grid>
          <Grid position={"absolute"}>
            <img src={chooseUsShape2} alt="" />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={6}>
        <Tabs>
          <TabList>
            <Tab>Our History</Tab>
            <Tab>Our Vision</Tab>
            <Tab>Our Mision</Tab>
          </TabList>

          <TabPanel>
            <Grid marginBottom={"30px"}>
              <Typography marginTop={"40px"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                illo molestias temporibus commodi exercitationem reprehenderit
                ullam reiciendis odit magni, autem rerum id blanditiis in
                ducimus error quasi nisi iusto sunt reprehenderit ullam
                reiciendis odit
              </Typography>

              <Typography marginTop={"20px"} marginBottom={"10px"} variant="h5">
                Strong customer focus
              </Typography>
              <Typography variant="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                illo molestias temporibus commodi exercitationem reprehenderit
                ullam reiciendis odit magni, autem rerum id blanditiis in
                ducimus error quasi nisi iusto sunt reprehenderit ullam
                reiciendis odit
              </Typography>
            </Grid>
            <Grid marginBottom={"30px"}>
              <Typography marginTop={"20px"} marginBottom={"10px"} variant="h5">
                On-time delivery
              </Typography>
              <Typography variant="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                illo molestias temporibus commodi exercitationem reprehenderit
                ullam reiciendis odit magni, autem rerum id blanditiis in
                ducimus error quasi nisi iusto sunt reprehenderit ullam
                reiciendis odit
              </Typography>
            </Grid>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </Grid>
    </Grid>
  );
};

export default Choose;
