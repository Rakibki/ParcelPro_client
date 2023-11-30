import React from "react";
import { useLoaderData } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";
import SectionTitle from "../../../../components/shared/sectionTitle/SectionTitle";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const UpdateParcel = () => {
  const updateParcel = useLoaderData();
  const axiosSecure = useAxiosSecure();

  const handleUpdate = async (e) => {
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
      status: "pending",
    };

    const res = await axiosSecure.put(
      `/updateParcel/${updateParcel._id}`,
      bookInfo
    );
    if (res) {
      Swal.fire("Parcel edited successfully");
    }
  };

  return (
    <Grid padding={"20px"} minHeight={"100vh"} bgcolor={"#fff"}>
      <SectionTitle color="black" title={"Update Parcel"} />
      <form  style={{ paddingTop: "50px" }} onSubmit={handleUpdate}>
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
        </Grid>
        <button
          type="submit"
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
      </form>
    </Grid>
  );
};

export default UpdateParcel;
