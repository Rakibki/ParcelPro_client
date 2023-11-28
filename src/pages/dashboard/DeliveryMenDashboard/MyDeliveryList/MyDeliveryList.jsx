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

  const handleCancel = async () => {
    const res = await updateParcelStatus(id, "Cancelled");
    refetch();
  };

  const handleDeliver = async (id) => {
    const res = await axiosSecure.put(`/handleDeliverd${id}`);
    console.log(res);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Booked User’s Name</TableCell>
              <TableCell align="right">Receivers Name</TableCell>
              <TableCell align="right">Booked User’s Phone</TableCell>
              <TableCell align="right">Requested Delivery Date</TableCell>
              <TableCell align="right">Approximate Delivery Date</TableCell>
              <TableCell align="right">Recievers phone number</TableCell>
              <TableCell align="right">Recievers Address</TableCell>
              <TableCell align="right">Action</TableCell>
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
                <TableCell align="right"></TableCell>
                <TableCell align="right">{row.ReceiverNumber}</TableCell>
                <TableCell align="right">{row.DeliveryAddress}</TableCell>
                <TableCell align="right">
                  <Button
                    sx={{ marginBottom: "5px" }}
                    onClick={() => handleCancel(row._id)}
                    size="small"
                    variant="contained"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() => handleDeliver(row._id)}
                    size="small"
                    variant="contained"
                  >
                    Deliver
                  </Button>
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