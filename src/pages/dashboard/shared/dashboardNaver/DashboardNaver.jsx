import { Grid, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { authContext } from "../../../../providers/authProvider/AuthProvider";
import "./style.css";
import useRole from "../../../../hooks/useRole";

const DashboardNaver = () => {
  const { user } = useContext(authContext);
  const [role] = useRole();

  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      marginBottom={2}
      paddingX={2}
      overflow={"hidden"}
      //   height={"70px"}
      bgcolor={"#fff"}
    >
      <Grid>
        <input
          className="inputFild"
          style={{
            borderRadius: "5px",
            backgroundColor: "#f3f3f9",
            width: "100%",
            padding: "8px 20px",
            outline: "none",
            border: "1px solid #e1e1e1",
          }}
          placeholder="Search..."
          type="text"
        />
      </Grid>

      <Grid>
        <Grid
          gap={"10px"}
          display={"flex"}
          bgcolor={"#f3f3f9"}
          height={"100%"}
          padding={2}
          width={"100%"}
        >
          <img
            style={{ width: "40px", height: "40px", borderRadius: "100%" }}
            src={user?.photoURL}
            alt="userImage"
          />
          <Grid>
            <Typography
              variant="p"
              sx={{ color: "#495057", fontWeight: "500" }}
              fontSize={"14px"}
            >
              {user?.displayName}
            </Typography>
            <br />
            <Typography
              variant="p"
              sx={{ color: "#495057", fontWeight: "500" }}
              fontSize={"12px"}
            >
              {role}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardNaver;
