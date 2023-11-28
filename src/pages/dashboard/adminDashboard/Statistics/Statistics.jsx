import React from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../components/loader/Loader";
import Chart from "react-apexcharts";
import { Grid, Typography } from "@mui/material";

const Statistics = () => {
  const axioSecure = useAxiosSecure();

  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const res = await axioSecure.get("/allBookings");
      return res.data;
    },
  });


  const bookingData = {
    dates: [
      "2023-01-01",
      "2023-01-02",
      "2023-01-03",
      "2023-01-04",
      "2023-01-05",
    ],
    bookings: [10, 15, 8, 12, 20],
  };

  const chartOptions = {
    chart: {
      id: "booking-chart",
    },
    xaxis: {
      categories: bookingData.dates,
    },
    labels: {
      show: true,
      style: {
        colors: ["#000"],
        fontSize: "12px",
      },
    },
  };


  const chartSeries = [
    {
      name: "Bookings",
      data: bookingData.bookings,
    },
  ];

  if (isPending) {
    return <Loader />;
  }

  return (
    <Grid width={"50%"}>
      <Typography variant="h6">bookings by date</Typography>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="bar"
        height={350}
      />
    </Grid>
  );
};
export default Statistics;
