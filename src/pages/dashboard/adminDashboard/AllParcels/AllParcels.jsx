import React, { useState } from "react";
import { getAllParcel } from "../../../../api/parcel";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import ManageParcelModal from "../../../../components/shared/modals/ManageParcelModal";
import { updateStatus } from "../../../../api/booking";

const AllParcels = () => {
  const [data, refetch] = getAllParcel();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [maneItem, setmanageItem] = useState(null)
  const [delivaryMenId, setDelivaryManId] = useState(null)

  const handleChick = (id) => {
    setOpen(true);
    setmanageItem(id)
  };

  const handleManageButton = async () => {
    const res = await updateStatus(maneItem, delivaryMenId)
    console.log(res);
    refetch()
  };

  const handleSelectDelivaryMen = (delivaryId) => {
    setDelivaryManId(delivaryId);
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>User’s Name </TableCell>
              <TableCell align="right">User’s Phone</TableCell>
              <TableCell align="right">Booking Date</TableCell>
              <TableCell align="right">Requested Delivery Date</TableCell>
              <TableCell align="right">Cost</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row?.phoneNumber}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">
                  <Button onClick={() => handleChick(row?._id)} variant="contained">
                    Manage
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ManageParcelModal
        handleManageButton={handleManageButton}
        handleClose={handleClose}
        handleOpen={handleOpen}
        open={open}
        handleSelectDelivaryMen={handleSelectDelivaryMen}
      />
    </>
  );
};

export default AllParcels;
