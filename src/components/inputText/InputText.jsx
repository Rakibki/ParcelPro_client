import { Grid } from "@mui/material";
import styless from "./inputTest.module.css";

const InputText = ({ label, type }) => {
  const inputStyle = {
    width: "100%",
    padding: "10px 20px",
    outline: "none",
    border: "1px solid #e1e1e1",
    marginTop: "5px",
  };

  return (
    <Grid G>
      <label htmlFor={label}>{label}</label>
      <input
        className={styless.inputFild}
        style={inputStyle}
        id={label}
        type={type}
      />
      ;
    </Grid>
  );
};

export default InputText;
