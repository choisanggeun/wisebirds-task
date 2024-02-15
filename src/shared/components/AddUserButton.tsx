"use client";

import { Button } from "@mui/material";
import { useAtom } from "jotai";
import React from "react";
import { userCreateModalOpenAtom } from "../atoms/userCreateModalOpen.atom";

function AddUserButton() {
  const [open, setOpen] = useAtom(userCreateModalOpenAtom);

  const onClickButton = () => {
    setOpen(true);
  };

  return (
    <Button variant="contained" sx={{ m: "20px" }} onClick={onClickButton}>
      사용자 추가
    </Button>
  );
}

export default AddUserButton;
