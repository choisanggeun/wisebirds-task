"use client";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import React from "react";

function PasswordConfirmCreateFormControl() {
  const [showPasswordConfirm, setShowPasswordConfirm] = React.useState(false);
  const handleClickShowPasswordConfirm = () =>
    setShowPasswordConfirm((show) => !show);
  const handleMouseDownPasswordConfirm = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <FormControl sx={{ m: 1, width: "500px" }} variant="standard" error>
      <InputLabel htmlFor="standard-adornment-password">
        비밀번호 확인
      </InputLabel>
      <Input
        required
        id="standard-adornment-password"
        type={showPasswordConfirm ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPasswordConfirm}
              onMouseDown={handleMouseDownPasswordConfirm}
            >
              {showPasswordConfirm ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      <FormHelperText id="my-helper-text">error message</FormHelperText>
    </FormControl>
  );
}

export default PasswordConfirmCreateFormControl;
