"use client";

import { userModifyModalSelectUserAtom } from "@/shared/atoms/userModifyModalSelectUser.atom";
import { validateUserModifyAtom } from "@/shared/atoms/validateUserModify.atom";
import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import { useAtom } from "jotai";
import React from "react";

function NameModifyFormControl() {
  const [userInfo, setUserInfo] = useAtom(userModifyModalSelectUserAtom);

  const [validationMessage, setValidationMessage] = useAtom(
    validateUserModifyAtom
  );

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, name: e.target.value });
  };
  return (
    <FormControl
      sx={{ m: 1, width: "500px" }}
      variant="standard"
      error={validationMessage !== ""}
    >
      <InputLabel htmlFor="standard-adornment-password" required>
        이름
      </InputLabel>
      <Input
        id="standard-adornment-name"
        type="text"
        value={userInfo.name}
        onChange={onChangeValue}
      />
      {validationMessage && (
        <FormHelperText id="my-helper-text">{validationMessage}</FormHelperText>
      )}
    </FormControl>
  );
}

export default NameModifyFormControl;
