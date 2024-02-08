import { Button, Grid, Typography } from "@mui/material";
import logo from "../../../assets/images/logo.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

const Footer = () => {
  return (
    <Grid paddingY={10} bgcolor={"#f9fbfe"} container spacing={3}>
      <Grid item xs={3}>
        <img src={logo} alt="" />
        <Typography marginY={3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </Typography>
        <Grid display={"flex"} gap={2}>
          <FaFacebookF size={"20px"} />
          <FaTwitter size={"20px"} />
          <FaInstagram size={"20px"} />
        </Grid>
      </Grid>

      <Grid xs={3}>
        <Typography marginBottom={2} fontWeight={700} variant="h5">
          Get in touch
        </Typography>

        <Typography
          marginBottom={1}
          alignItems={"center"}
          gap={1}
          display={"flex"}
        >
          <IoLocationOutline size={"18px"} color="#f76649" /> Address: 2976
          Sunrise road las vegas
        </Typography>

        <Typography
          marginBottom={1}
          alignItems={"center"}
          gap={1}
          display={"flex"}
        >
          <MdOutlinePhone size={"18px"} color="#f76649" /> Phone: +1 (514)
          312-5678
        </Typography>
        <Typography
          marginBottom={1}
          alignItems={"center"}
          gap={1}
          display={"flex"}
        >
          <MdOutlineEmail size={"18px"} color="#f76649" /> Email:
          hello@matro.com
        </Typography>
      </Grid>

      <Grid xs={3}>
        <Typography marginBottom={2} fontWeight={700} variant="h5">
          Information
        </Typography>
        <Typography marginBottom={1}>Terms & Conditions</Typography>
        <Typography marginBottom={1}>Privacy Policy</Typography>
        <Typography marginBottom={1}>Request A Quote</Typography>
        <Typography marginBottom={1}>FAQ</Typography>
      </Grid>

      <Grid xs={3}>
        <Typography marginBottom={2} fontWeight={700} variant="h5">
          Newsletter
        </Typography>
        <Typography marginBottom={1}>
          Subscribe to our newsletter and receive the latest tips via email.
        </Typography>

        <Grid>
          <input
            type="text"
            placeholder="hello@gmail.com"
            style={{
              padding: "10px 0px",
              borderBottom: "2px solid #8c8f93",
              outline: "none",
            }}
          />
          <button style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            Subscribe <FaArrowRightLong />
          </button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
