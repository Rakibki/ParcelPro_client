import React from 'react'
import { Grid, Typography } from "@mui/material";
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  return (
    <Grid padding={"30px"} width={"100%"} bgcolor={"#0e0e0e"}>
      <Typography fontSize={"16px"} textAlign={"center"} variant='h6' color={"#6c757d"}>
          <CopyrightIcon /> 2023 All Copy Right Reseved
      </Typography>
    </Grid>
  )
}

export default Footer