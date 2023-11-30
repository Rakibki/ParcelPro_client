import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../../../providers/authProvider/AuthProvider";
import { createBooking } from "../../../../api/booking";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";
import SectionTitle from "../../../../components/shared/sectionTitle/SectionTitle";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const BookParcel = () => {
  const { user } = useContext(authContext);
  const [weight, setWeight] = useState(0);
  const [totalPrice, setTotalPrice] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (weight == 1) {
      setTotalPrice(50);
    } else if (weight == 2) {
      setTotalPrice(100);
    } else if (weight > 2) {
      setTotalPrice(150);
    }
  }, [weight]);

  const handleBookSubmit = async (e) => {
    e.preventDefault();
    const bookInfo = {
      name: user?.displayName,
      email: user?.email,
      phoneNumber: e?.target?.phoneNumber?.value,
      parcelYype: e?.target?.parcelYype?.value,
      parcelWeight: e?.target?.parcelWeight?.value,
      ReceiverName: e?.target?.ReceiverName?.value,
      ReceiverNumber: e?.target?.ReceiverNumber?.value,
      DeliveryAddress: e?.target?.DeliveryAddress?.value,
      RequestedDate: e?.target?.RequestedDate?.value,
      DeliveryAddressLatitude: e?.target?.DeliveryAddressLatitude?.value,
      DeliveryAddresslongitude: e?.target?.DeliveryAddresslongitude?.value,
      price: totalPrice,
      status: "pending",
      bookingDate: new Date().toDateString(),
    };
    const res = await createBooking(bookInfo);
    if (res) {
      Swal.fire("Parcel has been successfully booked");
      navigate("/dashboard/myParcel");
    }
  };

  return (
    <Grid
      bgcolor={"#fff"}
      height={"100%"}
      style={{ borderLeft: "1px solid red" }}
    >
      <Grid paddingTop={"20px"}>
        <SectionTitle color="black" title={"book a Parcel"} />
      </Grid>
      <form
        style={{ paddingTop: "50px", padding: "20px" }}
        onSubmit={handleBookSubmit}
      >
        <Grid container spacing={1}>
          <Grid width={"100%"} item xs={6}>
            <TextField
              required
              defaultValue={user?.displayName}
              disabled
              id="outlined-basic"
              label="Name"
              variant="outlined"
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              defaultValue={user?.email}
              id="outlined-basic"
              disabled
              label="Email"
              variant="outlined"
              sx={{ width: "100%" }}
              required
            />
          </Grid>
        </Grid>

        <Grid marginTop={0.5} spacing={1} container>
          <Grid item xs={6}>
            <TextField
              name="phoneNumber"
              id="outlined-basic"
              label="phone number"
              variant="outlined"
              required
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="parcelYype"
              id="outlined-basic"
              label="parcel type"
              sx={{ width: "100%" }}
              required
              variant="outlined"
            />
          </Grid>
        </Grid>

        <Grid marginTop={0.5} spacing={1} container>
          <Grid item xs={6}>
            <TextField
              onChange={(e) => setWeight(e.target.value)}
              name="parcelWeight"
              id="outlined-basic"
              label="parcel weight"
              sx={{ width: "100%" }}
              required
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="ReceiverName"
              id="outlined-basic"
              label="Receiver Name"
              sx={{ width: "100%" }}
              required
              variant="outlined"
            />
          </Grid>
        </Grid>

        <Grid marginTop={0.5} spacing={1} container>
          <Grid item xs={6}>
            <TextField
              name="ReceiverNumber"
              id="outlined-basic"
              label="Receiver's Phone Number"
              variant="outlined"
              sx={{ width: "100%" }}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="DeliveryAddress"
              id="outlined-basic"
              required
              label="Parcel Delivery Address"
              variant="outlined"
              sx={{ width: "100%" }}
            />
          </Grid>
        </Grid>

        <Grid marginTop={0.5} container spacing={1}>
          <Grid item xs={6}>
            <TextField
              name="RequestedDate"
              id="outlined-basic"
              type="date"
              required
              variant="outlined"
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="DeliveryAddressLatitude"
              id="outlined-basic"
              label="Delivery Address Latitude"
              required
              variant="outlined"
              sx={{ width: "100%" }}
            />
          </Grid>
        </Grid>

        <Grid marginTop={0.5} container spacing={1}>
          <Grid item xs={6}>
            <TextField
              name="DeliveryAddresslongitude"
              id="outlined-basic"
              label="Delivery Address longitude"
              variant="outlined"
              sx={{ width: "100%" }}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              defaultValue={totalPrice}
              id="outlined-basic"
              label="price"
              variant="outlined"
              required
              sx={{ width: "100%" }}
            />
          </Grid>
        </Grid>

        <button
          style={{
            marginTop: "10px",
            fontWeight: "600",
            padding: `10px 20px`,
            backgroundColor: "#f44647",
            color: "#fff",
            borderRadius: "5px",
          }}
        >
          Submit
        </button>
        {/* <Button
          sx={{ marginTop: "10px", width: "100%" }}
          variant="contained"
          type="submit"
        >
          Submit
        </Button> */}
      </form>
    </Grid>
  );
};

export default BookParcel;
