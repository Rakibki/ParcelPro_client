import { Grid } from "@mui/material";

const InputText = ({ label, type }) => {
  return (
    <Grid border={"2px solid red"} container justifyContent={"center"}>
      <label htmlFor={label}>{label}</label>
      <input style={{ width: "100%" }} id={label} type={type} />;
    </Grid>
  );
};

export default InputText;
