import NotificationsIcon from "@mui/icons-material/Notifications";
import { Grid, IconButton, Typography } from "@mui/material";
import Badge from "@mui/material/Badge";
import { useContext, useState } from "react";
import { authContext } from "../../../providers/authProvider/AuthProvider";
import Loader from "../../loader/Loader";
import useAxiosLocal from "../../../hooks/useAxiosLocal";
import { useQuery } from "@tanstack/react-query";
import GppMaybeIcon from "@mui/icons-material/GppMaybe";

const Nonification = () => {
  const { user } = useContext(authContext);
  const axiosLocal = useAxiosLocal();
  const [open, SetOpen] = useState(false);

  const { isPending, data } = useQuery({
    enabled: !!user?.email,
    queryKey: ["message"],
    queryFn: async () => {
      const res = await axiosLocal.get(`/mayMassage/${user?.email}`);
      return res?.data;
    },
  });

  if (isPending) {
    <Loader />;
  }

  return (
    <Grid position={"relative"}>
      <div onClick={() => SetOpen(!open)}>
        <IconButton
          color="#f76649"
          size="large"
          aria-label="show 17 new notifications"
        >
          <Badge badgeContent={data?.length} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </div>
      {open && (
        <Grid
          position={"absolute"}
          sx={{ bgcolor: "#000000b3" }}
          right={"0px"}
          top={"64px"}
          padding={"30px"}
          bgcolor={"black"}
        >
          <Grid container>
            {data?.map((item) => {
              return (
                <Typography
                  sx={{ marginBottom: " 10px" }}
                  variant="p"
                  key={item._id}
                >
                  {" "}
                  <GppMaybeIcon /> {item.text}
                  <Typography sx={{ fontSize: "13px" }} variant="h6">
                    {item?.date}
                  </Typography>
                </Typography>
              );
            })}
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default Nonification;
