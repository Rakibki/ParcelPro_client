import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { authContext } from "../../../providers/authProvider/AuthProvider";
import { TextField } from "@mui/material";
import PrimayButton from "../button/PrimayButton";

const ReviewModal = ({ deviveryManId, open, handleClose }) => {
  const { user } = useContext(authContext);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleReview = () => {

  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleReview} >
            <TextField
              defaultValue={user?.displayName}
              sx={{ width: "100%", marginBottom: "10px" }}
              id="outlined-basic"
              label="Name"
              variant="outlined"
            />
            <TextField
              defaultValue={user?.photoURL}
              sx={{ width: "100%", marginBottom: "10px" }}
              id="outlined-basic"
              label="Image"
              variant="outlined"
            />
            <TextField
              defaultValue={deviveryManId}
              sx={{ width: "100%", marginBottom: "10px" }}
              id="outlined-basic"
              label="Delivery Man Id"
              variant="outlined"
            />

            <TextField
              id="outlined-multiline-static"
              label="Feedback"
              multiline
              rows={4}
              sx={{ width: "100%", marginBottom: "10px" }}
            />

            <PrimayButton  >Submit</PrimayButton>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ReviewModal;
