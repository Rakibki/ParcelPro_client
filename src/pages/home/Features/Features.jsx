import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";


const Features = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/feture.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);


  return (
    <Grid container>
      {data?.map(({ title, desc, Icon }) => {
        return (
          <Grid
            color={"#fff"}
            padding={"20px"}
            border={"2px solid #f44647"}
            bgcolor={"#303030"}
            xs={4}
            item
          >
            <Icon />
            <Typography marginBottom={"10px"} fontWeight={"600"} variant="h5">{title}</Typography>
            <Typography variant="p">{desc}</Typography>
          </Grid>
        );
      })}
    </Grid>
  );
  return <p>hello</p>;
};

export default Features;
