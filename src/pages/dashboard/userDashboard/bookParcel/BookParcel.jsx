import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../../../providers/authProvider/AuthProvider";
import { createBooking } from "../../../../api/booking";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";

const BookParcel = () => {
  const { user } = useContext(authContext);
  const [weight, setWeight] = useState(0);
  const [totalPrice, setTotalPrice] = useState(null);

  useEffect(() => {
    if (weight == 1) {
      setTotalPrice(50);
    } else if (weight == 2) {
      setTotalPrice(100);
    } else if (weight > 2) {
      setTotalPrice(150);
    }
  }, [setWeight, weight, setTotalPrice]);

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
    };
    const res = await createBooking(bookInfo);
  };

  console.log(totalPrice);

  return (
    <div>
      <form style={{ marginTop: "50px" }} onSubmit={handleBookSubmit}>
        <Grid container spacing={1}>
          <Grid width={"100%"} item xs={6}>
            <TextField
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
            />
          </Grid>
        </Grid>

        <Grid marginTop={.5} spacing={1} container>
          <Grid item xs={6}>
            <TextField
              name="phoneNumber"
              id="outlined-basic"
              label="phone number"
              variant="outlined"
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="parcelYype"
              id="outlined-basic"
              label="parcel type"
              sx={{ width: "100%" }}
              variant="outlined"
            />
          </Grid>
        </Grid>

        <Grid marginTop={.5} spacing={1} container>
          <Grid item xs={6}>
            <TextField
              onChange={(e) => setWeight(e.target.value)}
              name="parcelWeight"
              id="outlined-basic"
              label="parcel weight"
              sx={{ width: "100%" }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="ReceiverName"
              id="outlined-basic"
              label="Receiver Name"
              sx={{ width: "100%" }}
              variant="outlined"
            />
          </Grid>
        </Grid>

        <Grid marginTop={.5} spacing={1} container>
          <Grid item xs={6}>
            <TextField
              name="ReceiverNumber"
              id="outlined-basic"
              label="Receiver's Phone Number"
              variant="outlined"
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="DeliveryAddress"
              id="outlined-basic"
              label="Parcel Delivery Address"
              variant="outlined"
              sx={{ width: "100%" }}
            />
          </Grid>
        </Grid>

        <Grid marginTop={.5} container spacing={1}>
          <Grid item xs={6}>
            <TextField
              name="RequestedDate"
              id="outlined-basic"
              label="Requested Delivery Date"
              variant="outlined"
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="DeliveryAddressLatitude"
              id="outlined-basic"
              label="Delivery Address Latitude"
              variant="outlined"
              sx={{ width: "100%" }}
            />
          </Grid>
        </Grid>

        <Grid marginTop={.5} container spacing={1}>
          <Grid item xs={6}>
            <TextField
              name="DeliveryAddresslongitude"
              id="outlined-basic"
              label="Delivery Address longitude"
              variant="outlined"
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              defaultValue={totalPrice}
              id="outlined-basic"
              label="price"
              variant="outlined"
              sx={{ width: "100%" }}
            />
          </Grid>
        </Grid>
        <Button sx={{marginTop: "10px", width: "100%"}} variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default BookParcel;
