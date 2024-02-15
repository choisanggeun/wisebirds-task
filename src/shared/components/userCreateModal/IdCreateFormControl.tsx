"use client";

import { userCreateModalValueAtom } from "@/shared/atoms/userCreateModalValue.atom";
import { validateUserCreateAtom } from "@/shared/atoms/validateUserCreate.atom";
import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import { useAtom, useAtomValue } from "jotai";
import React from "react";

function IdCreateFormControl() {
  const validationMessage = useAtomValue(validateUserCreateAtom);
  const [value, setValue] = useAtom(userCreateModalValueAtom);

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, email: e.target.value });
  };

  return (
    <FormControl
      sx={{ m: 1, width: "500px" }}
      variant="standard"
      error={validationMessage.email !== ""}
    >
      <InputLabel htmlFor="standard-adornment-password">아이디</InputLabel>
      <Input
        id="standard-adornment-name"
        type="text"
        value={value.email}
        onChange={onChangeValue}
      />
      {validationMessage.email && (
        <FormHelperText id="my-helper-text">
          {validationMessage.email}
        </FormHelperText>
      )}
    </FormControl>
  );
}

export default IdCreateFormControl;
