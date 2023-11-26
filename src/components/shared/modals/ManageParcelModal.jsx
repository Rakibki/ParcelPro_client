import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { getAllDeliveryMen } from "../../../api/auth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Grid } from "@mui/material";
import PrimayButton from "../button/PrimayButton";

const ManageParcelModal = ({handleManageButton, handleSelectDelivaryMen, handleOpen, handleClose, open }) => {
  const [Delivery_name, setDelivery_name] = useState("");
  const [AllDeliveryMen] = getAllDeliveryMen();
  const [startDate, setStartDate] = useState(new Date());

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #f44647",
    boxShadow: 24,
    p: 4,
  };



  const handleChange = (event) => {
    handleSelectDelivaryMen(event.target.value)
    setDelivery_name(event.target.value)
  };

  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography
            marginBottom={"10px"}
            id="keep-mounted-modal-title"
            variant="h6"
            component="h2"
          >
            Select Delivery Man
          </Typography>

          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Select</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                value={Delivery_name}
                onChange={handleChange}
              >
                {AllDeliveryMen?.data?.map((item) => {
                  return <MenuItem value={item._id}>{item?.name}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </Box>
          <Grid marginTop={"10px"} marginBottom={"20px"} width={"100%"}>
            <DatePicker
              width={"100%"}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </Grid>
          <Grid onClick={handleManageButton}>
            <PrimayButton PrimayButton>assign</PrimayButton>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default ManageParcelModal;
