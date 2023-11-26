import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
// import PeopleAltIcon from '@mui/icons-material/PeopleAltIcon';
// import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafetyIcon';
// import ThumbUpIcon from '@mui/icons-material/ThumbUpIcon';

const Features = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/feture.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  });

  return (
    <Grid marginTop={"20px"} container spacing={1}>
      {data?.map(({ title, desc, Icon }) => {
        return (
          <Grid xs={4} item>
            <Icon />
            <Typography variant="p">{title}</Typography>
            <Typography variant="p">{desc}</Typography>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Features;
