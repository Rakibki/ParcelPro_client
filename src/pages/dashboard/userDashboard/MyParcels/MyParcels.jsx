import React, { useEffect, useState } from "react";
import useMyParcel from "../../../../hooks/useMyParcel";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { deleteBooking } from "../../../../api/booking";

const MyParcels = () => {
  const [myParcel, setMyParcel] = useState([]);

  useMyParcel().then((res) => {
    setMyParcel(res[0].data);
  });



  const handleDelete =  (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteBooking(id).then(async (res) => {
          if (res) {
            const [data,refetch] = setMyParcel() 
            refetch()
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>A basic table example with a caption</caption>
        <TableHead>
          <TableRow>
            <TableCell>Parcel Type</TableCell>
            <TableCell align="right">Requested Delivery Date</TableCell>
            <TableCell align="right">Approximate Delivery Date</TableCell>
            <TableCell align="right">Booking Date</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {myParcel?.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">
                <Grid>
                  {row.status === "pending" ? (
                    <Grid container spacing={4}>
                      <Grid xs={6} item>
                        <Link to={`/dashboard/updateParcel/${row._id}`}>
                          {" "}
                          <Button size="small" variant="outlined">
                            Update
                          </Button>{" "}
                        </Link>
                      </Grid>
                      <Grid xs={6} item>
                        <Button
                          onClick={() => handleDelete(row._id)}
                          size="small"
                          variant="outlined"
                        >
                          Dalete
                        </Button>{" "}
                      </Grid>
                    </Grid>
                  ) : (
                    <Grid container spacing={4}>
                      <Grid item xs={6}>
                        <Button size="small" disabled variant="outlined">
                          Update
                        </Button>
                      </Grid>
                      <Grid item xs={6}>
                        <Button size="small" disabled variant="outlined">
                          Dalete
                        </Button>
                      </Grid>
                    </Grid>
                  )}
                </Grid>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MyParcels;
