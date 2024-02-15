"use client";

import { userCreateModalValueAtom } from "@/shared/atoms/userCreateModalValue.atom";
import { validateUserCreateAtom } from "@/shared/atoms/validateUserCreate.atom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { useAtom, useAtomValue } from "jotai";
import React from "react";

function PasswordCreateFormControl() {
  const validationMessage = useAtomValue(validateUserCreateAtom);
  const [value, setValue] = useAtom(userCreateModalValueAtom);

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, password: e.target.value });
  };

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <FormControl
      sx={{ m: 1, width: "500px" }}
      variant="standard"
      error={validationMessage.password !== ""}
    >
      <InputLabel htmlFor="standard-adornment-password">비밀번호</InputLabel>
      <Input
        id="standard-adornment-password"
        type={showPassword ? "text" : "password"}
        value={value.password}
        onChange={onChangeValue}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      {validationMessage.password && (
        <FormHelperText id="my-helper-text">
          {validationMessage.password}
        </FormHelperText>
      )}
    </FormControl>
  );
}

export default PasswordCreateFormControl;
