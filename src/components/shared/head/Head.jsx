import { Box } from "@mui/material";

const Head = () => {
  const handleScroll = () => {
    alert("dddd");
  };

  return (
    <Box
      onScroll={handleScroll}
    //   sx={{ display: "none" }}
      padding={"5px"}
      bgcolor={"#1f2428"}
    >
      Head
    </Box>
  );
};

export default Head;
