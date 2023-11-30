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
import SectionTitle from "../../../../components/shared/sectionTitle/SectionTitle";

const MyParcels = () => {
  const [open, setOpen] = useState(false);
  const AxiosSecure = useAxiosSecure();
  const { user, loadding } = useContext(authContext);
  const [deviveryManId, setDeviveryManId] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    isPending,
    error,
    refetch,
    data: myParcel,
  } = useQuery({
    queryKey: ["MyPercel"],
    enabled: !loadding && !!user?.email,
    queryFn: async () => {
      const res = await AxiosSecure.get(`/myParcel/${user?.email}`);
      return res;
    },
  });

  const handleClick = (id) => {
    setOpen(true);
    setDeviveryManId(id);
  };

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
        refetch();
        deleteBooking(id).then(async (res) => {
          if (res) {
            refetch()
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
          <TableHead sx={{ bgcolor: "#f44647" }}>
            <TableRow>
              <TableCell sx={{ color: "#fff", fontWeight: "600" }}>
                Parcel Type
              </TableCell>
              <TableCell
                sx={{ color: "#fff", fontWeight: "600" }}
                align="right"
              >
                Requested Date
              </TableCell>
              <TableCell
                sx={{ color: "#fff", fontWeight: "600" }}
                align="right"
              >
                Delivery Date
              </TableCell>
              <TableCell
                sx={{ color: "#fff", fontWeight: "600" }}
                align="right"
              >
                Booking Date
              </TableCell>
              <TableCell
                sx={{ color: "#fff", fontWeight: "600" }}
                align="right"
              >
                Status
              </TableCell>
              <TableCell
                sx={{ color: "#fff", fontWeight: "600" }}
                align="right"
              >
                Delivery Man Id
              </TableCell>
              <TableCell
                sx={{ color: "#fff", fontWeight: "600" }}
                align="right"
              >
                Action
              </TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {myParcel?.data?.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.parcelYype}
                </TableCell>
                <TableCell align="right">{row.RequestedDate}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.bookingDate}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.delivaryMenId}</TableCell>
                <TableCell align="right">
                  {row?.status === "deliverd" ? (
                    <Grid>
                      <button
                        onClick={() => handleClick(row?.delivaryMenId)}
                        style={{
                          marginTop: "10px",
                          fontWeight: "600",
                          padding: `6px 15px`,
                          backgroundColor: "#f44647",
                          color: "#fff",
                          borderRadius: "5px",
                        }}
                      >
                        Review
                      </button>
                    </Grid>
                  ) : (
                    <Grid>
                      {row.status === "pending" ? (
                        <Grid spacing={0.5} container>
                          <Link to={`/dashboard/updateParcel/${row._id}`}>
                            <button
                              style={{
                                cursor: "pointer",
                                marginTop: "10px",
                                fontWeight: "600",
                                padding: `4px 10px`,
                                backgroundColor: "#f44647",
                                color: "#fff",
                                borderRadius: "5px",
                              }}
                            >
                              Update
                            </button>
                          </Link>
                          <Grid xs={6} item>
                            <button
                              onClick={() => handleDelete(row._id)}
                              style={{
                                marginTop: "10px",
                                fontWeight: "600",
                                padding: `4px 10px`,
                                backgroundColor: "#f44647",
                                color: "#fff",
                                borderRadius: "5px",
                              }}
                            >
                              Dalete
                            </button>
                          </Grid>
                        </Grid>
                      ) : (
                        <Grid spacing={0.5} container>
                          <button
                            disabled
                            style={{
                              marginTop: "10px",
                              fontWeight: "600",
                              opacity: "40%",
                              padding: `4px 10px`,
                              backgroundColor: "#f44647",
                              color: "#fff",
                              borderRadius: "5px",
                            }}
                          >
                            Update
                          </button>
                          <button
                            disabled
                            style={{
                              marginTop: "10px",
                              fontWeight: "600",
                              opacity: "40%",
                              padding: `4px 10px`,
                              backgroundColor: "#f44647",
                              color: "#fff",
                              borderRadius: "5px",
                            }}
                          >
                            Dalete
                          </button>
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

      <ReviewModal
        deviveryManId={deviveryManId}
        handleOpen={handleOpen}
        handleClose={handleClose}
        open={open}
      />
    </>
  );
};

export default MyParcels;
