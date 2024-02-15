"use client";

import { userCreateModalValueAtom } from "@/shared/atoms/userCreateModalValue.atom";
import { validateUserCreateAtom } from "@/shared/atoms/validateUserCreate.atom";
import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import { useAtom, useAtomValue } from "jotai";
import React from "react";

function NameCreateFormControl() {
  const validationMessage = useAtomValue(validateUserCreateAtom);
  const [value, setValue] = useAtom(userCreateModalValueAtom);

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, name: e.target.value });
  };

  return (
    <FormControl
      sx={{ m: 1, width: "500px" }}
      variant="standard"
      error={validationMessage.name !== ""}
    >
      <InputLabel htmlFor="standard-adornment-password">이름</InputLabel>
      <Input
        id="standard-adornment-name"
        type="text"
        onChange={onChangeValue}
        value={value.name}
      />
      {validationMessage.name && (
        <FormHelperText id="my-helper-text">
          {validationMessage.name}
        </FormHelperText>
      )}
    </FormControl>
  );
}

export default NameCreateFormControl;
