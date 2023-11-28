import { Button } from "@mui/material";
import React from "react";

const PrimayButton = ({ children, size="20px" }) => {
  return (
    <button
      style={{
        fontWeight: "600",
        padding: `10px ${size}`,
        backgroundColor: "#f44647",
        color: "#fff",
      }}
    >
      {children}
    </button>
  );
};

export default PrimayButton;
