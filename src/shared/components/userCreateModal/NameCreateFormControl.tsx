import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import React from "react";

function NameCreateFormControl() {
  return (
    <FormControl sx={{ m: 1, width: "500px" }} variant="standard" error>
      <InputLabel htmlFor="standard-adornment-password">이름</InputLabel>
      <Input id="standard-adornment-name" type="text" />
      <FormHelperText id="my-helper-text">error message</FormHelperText>
    </FormControl>
  );
}

export default NameCreateFormControl;
