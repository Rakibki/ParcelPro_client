import React from "react";
import { all_users } from "../../../../api/auth";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PrimayButton from "../../../../components/shared/button/PrimayButton";
import { Grid } from "@mui/material";
import makeAdmin from "../../../../api/makeAdmin";
import Loader from "../../../../components/loader/Loader";
import makeDeliveryMan from "../../../../api/makeDeliveryMan";

const AllUsers = () => {
  const [users, isPending, refetch] = all_users();

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const handleMakeDeliveryMan = (id) => {
    makeDeliveryMan(id)
    alert(id)
    .then((res) => {
      refetch()
      console.log(res);
    })
  };
  const handleMakeAdmin = async (id) => {
    makeAdmin(id)
    .then((res) => {
      refetch()
      console.log(res);
    })
  };

  if(isPending || users.length < 0) {
    return <Loader />
  }

  return (
    users?.data?.length > 0 && (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }}>
          <TableHead backgroundColor={"#5c8134"}>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Phone</StyledTableCell>
              <StyledTableCell align="right">Role</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.data?.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.email}</StyledTableCell>
                <StyledTableCell align="right">{row.role}</StyledTableCell>
                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                <StyledTableCell align="right">
                  <Grid onClick={() => handleMakeDeliveryMan(row?._id)}>
                    <PrimayButton size="small">Make Delivery Men</PrimayButton>
                  </Grid>
                  <Grid onClick={() => handleMakeAdmin(row?._id)}>
                    <PrimayButton size="small">
                      Make Admin
                    </PrimayButton>
                  </Grid>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  );
};

export default AllUsers;
