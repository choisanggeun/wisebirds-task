import { FormControl, Typography } from "@mui/material";
import React from "react";

interface IdModifyFormControlProps {
  id: string;
}

function IdModifyFormControl({ id }: IdModifyFormControlProps) {
  return (
    <FormControl sx={{ m: 1, width: "500px" }} variant="standard">
      <Typography id="modal-modal-title" variant="h6" component="h2">
        아이디
      </Typography>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        {id}
      </Typography>
    </FormControl>
  );
}

export default IdModifyFormControl;
