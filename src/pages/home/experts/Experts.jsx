import { Grid, Typography } from "@mui/material";
import requestSuoteImg from "../../../assets/images/request-quote-img.jpg";
import InputText from "../../../components/inputText/InputText";

const Experts = () => {
  return (
    <Grid
      width={"100%"}
      height={"750px"}
      spacing={5}
      marginY={"40px"}
      container
    >
      <Grid width={"100%"} height={"100%"} zIndex={-54} item xs={6}>
        <img
          style={{ width: "100%", height: "100%" }}
          src={requestSuoteImg}
          alt="logisticsSolutions"
        />
      </Grid>

      <Grid item xs={6}>
        <Typography color={"#f76649"} variant="p">
          Logistics solutions
        </Typography>

        <Grid>
          <Typography
            marginTop={"10px"}
            fontWeight={700}
            color={"#1e2327"}
            variant="h3"
          >
            We provide the best solution for you
          </Typography>
        </Grid>

        <Grid bgcolor={"#fff"} zIndex={3} marginLeft={"-80px"} padding={"10px"}>
          <Grid container>
            <InputText item xs={6} type={"text"} label="Your name" />
            <InputText item xs={6} type={"email"} label="Your Email" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Experts;
