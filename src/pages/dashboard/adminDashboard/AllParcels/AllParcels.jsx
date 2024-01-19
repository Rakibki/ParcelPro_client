import { useState } from "react";
import { getAllParcel } from "../../../../api/parcel";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import ManageParcelModal from "../../../../components/shared/modals/ManageParcelModal";
import { updateStatus } from "../../../../api/booking";
import PrimayButton from "../../../../components/shared/button/PrimayButton";

const AllParcels = () => {
  const [data, refetch] = getAllParcel();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [maneItem, setmanageItem] = useState(null);
  const [delivaryMenId, setDelivaryManId] = useState(null);

  const handleChick = (id) => {
    setOpen(true);
    setmanageItem(id);
  };

  const handleManageButton = async (DeliveryDate) => {
    await updateStatus(maneItem, delivaryMenId, DeliveryDate);
    refetch();
    handleClose();
  };

  const handleSelectDelivaryMen = (delivaryId) => {
    setDelivaryManId(delivaryId);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ bgcolor: "#f44647" }}>
            <TableRow>
              <TableCell sx={{ color: "#fff", fontWeight: "600" }}>
                User’s Name{" "}
              </TableCell>
              <TableCell
                sx={{ color: "#fff", fontWeight: "600" }}
                align="right"
              >
                User’s Phone
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
                Requested Date
              </TableCell>
              <TableCell
                sx={{ color: "#fff", fontWeight: "600" }}
                align="right"
              >
                Cost
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
                Action
              </TableCell>
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
                <TableCell align="right">{row.bookingDate}</TableCell>
                <TableCell align="right">{row.RequestedDate}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">
                  <Grid onClick={() => handleChick(row?._id)}>
                    <PrimayButton>Manage</PrimayButton>
                  </Grid>
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
