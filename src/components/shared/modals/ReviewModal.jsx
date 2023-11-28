import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { authContext } from "../../../providers/authProvider/AuthProvider";
import { Rating, TextField } from "@mui/material";
import PrimayButton from "../button/PrimayButton";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ReviewModal = ({ deviveryManId, open, handleClose }) => {
  const { user } = useContext(authContext);
  const [value, setValue] = React.useState(2);
  const axiosSecure = useAxiosSecure();

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

  const handleReview = async (e) => {
    e.preventDefault();

    const review = {
      name: e.target.name.value,
      image: e.target.image.value,
      deviveryManId: e.target.deviveryManId.value,
      feedback: e.target.feedback.value,
      ratting: value,
    };

    const res = await axiosSecure.post("/review", review);
    console.log(res);
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
          <form onSubmit={handleReview}>
            <TextField
              defaultValue={user?.displayName}
              sx={{ width: "100%", marginBottom: "10px" }}
              id="outlined-basic"
              label="Name"
              variant="outlined"
              name="name"
            />
            <TextField
              defaultValue={user?.photoURL}
              sx={{ width: "100%", marginBottom: "10px" }}
              id="outlined-basic"
              label="Image"
              variant="outlined"
              name="image"
            />
            <TextField
              defaultValue={deviveryManId}
              sx={{ width: "100%", marginBottom: "10px" }}
              id="outlined-basic"
              label="Delivery Man Id"
              variant="outlined"
              name="deviveryManId"
            />

            <TextField
              id="outlined-multiline-static"
              label="Feedback"
              multiline
              name="feedback"
              rows={4}
              sx={{ width: "100%", marginBottom: "10px" }}
            />

            <Rating
              onChange={(e, rattingValue) => setValue(rattingValue)}
              name="half-rating"
              defaultValue={2.5}
              precision={0.5}
            />
            <br />
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ReviewModal;
