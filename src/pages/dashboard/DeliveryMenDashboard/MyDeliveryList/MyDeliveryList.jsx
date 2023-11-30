import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../../../providers/authProvider/AuthProvider";
import { getUser } from "../../../../api/auth";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import getIdbyEmail from "../../../../api/getIdbyEmail";
import { Button } from "@mui/material";
import { updateParcelStatus } from "../../../../api/booking";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Loader from "../../../../components/loader/Loader";
import Swal from "sweetalert2";

const MyDeliveryList = () => {
  const [id, setId] = useState(null);
  const axiosSecure = useAxiosSecure();

  const getDate = async () => {
    const id = await getIdbyEmail();
    setId(id);
  };
  getDate();

  const {
    isPending,
    refetch,
    error,
    data: myList,
  } = useQuery({
    queryKey: ["getMyDevliver"],
    enabled: !!id,
    queryFn: async () => {
      const res = await axiosSecure.get(`/myDelivery/${id}`);
      return res.data;
    },
  });

  if (isPending) {
    return <Loader />;
  }

  const handleCancel = async (bookingId) => {
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
        updateParcelStatus(bookingId, "Cancelled")
        .then((res) => {
          console.log(res);
          refetch();
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        });
      }
    });
  };

  const handleDeliver = async (Bookid) => {
    const res = await axiosSecure.put(
      `/handleDeliverd?id=${Bookid}&deliveryManId=${id}`
    );
    if (res) {
      Swal.fire("Successfully delivered");
      refetch();
    }
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#f44647" }}>
            <TableRow>
              <TableCell sx={{ color: "#fff" }}>Name</TableCell>
              <TableCell sx={{ color: "#fff" }} align="right">
                Receivers Name
              </TableCell>
              <TableCell sx={{ color: "#fff" }} align="right">
                Booked User’s Phone
              </TableCell>
              <TableCell sx={{ color: "#fff" }} align="right">
                Requested Delivery Date
              </TableCell>
              <TableCell sx={{ color: "#fff" }} align="right">
                Delivery Date
              </TableCell>
              <TableCell sx={{ color: "#fff" }} align="right">
                Recievers phone number
              </TableCell>
              <TableCell sx={{ color: "#fff" }} align="right">
                Recievers Address
              </TableCell>
              <TableCell sx={{ color: "#fff" }} align="right">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {myList?.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.ReceiverName}</TableCell>
                <TableCell align="right">{row.phoneNumber}</TableCell>
                <TableCell align="right">{row.RequestedDate}</TableCell>
                <TableCell align="right">{row?.DeliveryDate}</TableCell>
                <TableCell align="right">{row.ReceiverNumber}</TableCell>
                <TableCell align="right">{row.DeliveryAddress}</TableCell>
                <TableCell align="right">
                  <button
                    onClick={() => handleCancel(row._id)}
                    style={{
                      marginTop: "10px",
                      fontWeight: "600",
                      padding: `4px 10px`,
                      backgroundColor: "#f44647",
                      color: "#fff",
                      borderRadius: "5px",
                    }}
                  >Cancel</button>
                  
                  <button
                    onClick={() => handleDeliver(row._id)}
                    disabled={row.status === "deliverd"}
                    style={{
                      opacity: `${row.status}` === "deliverd" ? "40%" : "100%",
                      marginTop: "10px",
                      fontWeight: "600",
                      padding: `4px 10px`,
                      backgroundColor: "#f44647",
                      color: "#fff",
                      borderRadius: "5px",
                    }}
                  >
                    Deliver
                  </button>
                  {/* <Button
                    disabled={row.status === "deliverd"}
                    onClick={() => handleDeliver(row._id)}
                    size="small"
                    variant="contained"
                  >
                    Deliver
                  </Button> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MyDeliveryList;
