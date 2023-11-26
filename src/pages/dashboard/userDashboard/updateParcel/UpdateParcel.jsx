import React from "react";
import { useLoaderData } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";

const UpdateParcel = () => {
  const updateParcel = useLoaderData();

  const handleUpdate = (e) => {
    e.preventDefault();
    const bookInfo = {
      phoneNumber: e?.target?.phoneNumber?.value,
      parcelYype: e?.target?.parcelYype?.value,
      parcelWeight: e?.target?.parcelWeight?.value,
      ReceiverName: e?.target?.ReceiverName?.value,
      ReceiverNumber: e?.target?.ReceiverNumber?.value,
      DeliveryAddress: e?.target?.DeliveryAddress?.value,
      RequestedDate: e?.target?.RequestedDate?.value,
      DeliveryAddressLatitude: e?.target?.DeliveryAddressLatitude?.value,
      DeliveryAddresslongitude: e?.target?.DeliveryAddresslongitude?.value,
      // price: totalPrice,
      status: "pending",
    };
  };

  return (
    <div>
      <form style={{ marginTop: "50px" }} onSubmit={handleUpdate}>
        <Grid marginTop={0.5} spacing={1} container>
          <Grid item xs={6}>
            <TextField
              name="phoneNumber"
              id="outlined-basic"
              label="phone number"
              variant="outlined"
              sx={{ width: "100%" }}
              defaultValue={updateParcel?.phoneNumber}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="parcelYype"
              id="outlined-basic"
              label="parcel type"
              sx={{ width: "100%" }}
              variant="outlined"
              defaultValue={updateParcel?.parcelYype}
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
              defaultValue={updateParcel?.parcelWeight}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="ReceiverName"
              id="outlined-basic"
              label="Receiver Name"
              sx={{ width: "100%" }}
              defaultValue={updateParcel?.ReceiverName}
              variant="outlined"
            />
          </Grid>
        </Grid>

        <Grid marginTop={0.5} spacing={1} container>
          <Grid item xs={6}>
            <TextField
              name="ReceiverNumber"
              id="outlined-basic"
              defaultValue={updateParcel?.ReceiverNumber}
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
              defaultValue={updateParcel?.DeliveryAddress}
            />
          </Grid>
        </Grid>

        <Grid marginTop={0.5} container spacing={1}>
          <Grid item xs={6}>
            <TextField
              name="RequestedDate"
              id="outlined-basic"
              label="Requested Delivery Date"
              variant="outlined"
              sx={{ width: "100%" }}
              defaultValue={updateParcel?.RequestedDate}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="DeliveryAddressLatitude"
              id="outlined-basic"
              label="Delivery Address Latitude"
              variant="outlined"
              sx={{ width: "100%" }}
              defaultValue={updateParcel?.DeliveryAddressLatitude}
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
              defaultValue={updateParcel?.DeliveryAddresslongitude}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              // defaultValue={totalPrice}
              id="outlined-basic"
              label="price"
              variant="outlined"
              sx={{ width: "100%" }}
              defaultValue={updateParcel?.price}
            />
          </Grid>
        </Grid>
        <Button
          sx={{ marginTop: "10px", width: "100%" }}
          variant="contained"
          type="submit"
        >
          Update
        </Button>
      </form>
    </div>
  );
};

export default UpdateParcel;
