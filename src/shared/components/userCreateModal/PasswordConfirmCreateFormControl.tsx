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

function PasswordConfirmCreateFormControl() {
  const validationMessage = useAtomValue(validateUserCreateAtom);
  const [value, setValue] = useAtom(userCreateModalValueAtom);

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, repeat_password: e.target.value });
  };

  const [showPasswordConfirm, setShowPasswordConfirm] = React.useState(false);
  const handleClickShowPasswordConfirm = () =>
    setShowPasswordConfirm((show) => !show);
  const handleMouseDownPasswordConfirm = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <FormControl
      sx={{ m: 1, width: "500px" }}
      variant="standard"
      error={validationMessage.repeat_password !== ""}
    >
      <InputLabel htmlFor="standard-adornment-password">
        비밀번호 확인
      </InputLabel>
      <Input
        required
        id="standard-adornment-password"
        type={showPasswordConfirm ? "text" : "password"}
        value={value.repeat_password}
        onChange={onChangeValue}
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
      {validationMessage.repeat_password && (
        <FormHelperText id="my-helper-text">
          {validationMessage.repeat_password}
        </FormHelperText>
      )}
    </FormControl>
  );
}

export default PasswordConfirmCreateFormControl;
