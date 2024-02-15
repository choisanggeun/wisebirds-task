import { FormControl, Input, InputLabel } from "@mui/material";
import React from "react";

function NameModifyFormControl() {
  return (
    <FormControl sx={{ m: 1, width: "500px" }} variant="standard">
      <InputLabel htmlFor="standard-adornment-password" required>
        이름
      </InputLabel>
      <Input id="standard-adornment-name" type="text" />
    </FormControl>
  );
}

export default NameModifyFormControl;
