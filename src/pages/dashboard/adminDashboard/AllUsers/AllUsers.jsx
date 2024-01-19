import { useState } from "react";
import { all_users, userLength } from "../../../../api/auth";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PrimayButton from "../../../../components/shared/button/PrimayButton";
import makeAdmin from "../../../../api/makeAdmin";
import Loader from "../../../../components/loader/Loader";
import makeDeliveryMan from "../../../../api/makeDeliveryMan";
import Swal from "sweetalert2";

const AllUsers = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemperPage, setItemPerPage] = useState(5);
  const [users, isPending, refetch] = all_users(currentPage, itemperPage);
  const [numberOfUsers, setNumberOfUser] = useState(0);

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
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const handleMakeDeliveryMan = (id) => {
    makeDeliveryMan(id)
    .then(() => {
      refetch();
      Swal.fire("Successfully created delivery man.");
    });
  };
  const handleMakeAdmin = async (id) => {
    makeAdmin(id).then(() => {
      refetch();
      Swal.fire("Administered successfully");
    });
  };

  if (isPending) {
    return <Loader />;
  }

  userLength().then((res) => {
    setNumberOfUser(res);
  });

  const pages = Math.ceil(numberOfUsers / itemperPage);
  const pagination = [...new Array(pages).keys()];

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePrevus = () => {
    setCurrentPage(currentPage - 1);
  };

  const activeStyle = {
    backgroundColor: "#f44647",
  };

  return (
    <div>
      {users && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ bgcolor: "#f44647" }}>
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
                  <StyledTableCell align="right">
                    <Grid
                      sx={{ marginBottom: "3px" }}
                      onClick={() => handleMakeDeliveryMan(row?._id)}
                    >
                      <PrimayButton>Make Delivery Men</PrimayButton>
                    </Grid>
                    <Grid onClick={() => handleMakeAdmin(row?._id)}>
                      <PrimayButton>Make Admin</PrimayButton>
                    </Grid>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <Grid
        marginBottom={"30px"}
        marginTop={"20px"}
        container
        justifyContent={"center"}
      >
        <Grid>
          {pagination.length > 0 && (
            <div>
              <button
                style={{
                  fontWeight: "600",
                  padding: `7px 20px`,
                  backgroundColor: "#f44647",
                  color: "#fff",
                  marginRight: "4px",
                }}
                onClick={() => handlePrevus()}
              >
                Pres
              </button>
              {pagination.map((item) => (
                <button
                  style={{
                    padding: "5px 10px",
                    border: "2px solid #f44647",
                    color: "#f44647",
                    marginRight: "4px",
                  }}
                  onClick={() => setCurrentPage(item)}
                  variant="outlined"
                >
                  {item}
                </button>
              ))}
              <button
                style={{
                  fontWeight: "600",
                  padding: `7px 20px`,
                  backgroundColor: "#f44647",
                  color: "#fff",
                }}
                onClick={() => handleNext()}
              >
                Next
              </button>
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default AllUsers;
