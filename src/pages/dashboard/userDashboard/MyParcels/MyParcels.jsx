import React, { useContext, useEffect, useState } from "react";
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
import ReviewModal from "../../../../components/shared/modals/ReviewModal";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { authContext } from "../../../../providers/authProvider/AuthProvider";

const MyParcels = () => {
  const [open, setOpen] = useState(false);
  const AxiosSecure = useAxiosSecure()
  const {user, loadding} = useContext(authContext)
  const [deviveryManId, setDeviveryManId] = useState(null)

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { isPending, error, refetch, data:myParcel } = useQuery({
    queryKey: ['MyPercel'],
    enabled: !loadding && !!user?.email,
    queryFn: async () => {
        const res = await AxiosSecure.get(`/myParcel/${user?.email}`);
        return res
    }
  })


  const handleClick = (id) => {
    setOpen(true)
    setDeviveryManId(id)
  }


  const handleDelete = (id) => {
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
            const [data, refetch] = setMyParcel();
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };

  return (
    <>
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
            {myParcel?.data?.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">
                  {row?.status === "delivered" ? (
                    <Grid >
                      <Button onClick={() => handleClick(row?.delivaryMenId)} size="small" variant="outlined">
                        Review
                      </Button>{" "}
                    </Grid>
                  ) : (
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
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      <ReviewModal deviveryManId={deviveryManId} handleOpen={handleOpen} handleClose={handleClose} open={open} />
    </>
  );
};

export default MyParcels;
