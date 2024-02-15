"use client";

import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import { useAtom } from "jotai";
import React from "react";
import Close from "@mui/icons-material/Close";
import { userCreateModalOpenAtom } from "../../atoms/userCreateModalOpen.atom";
import IdCreateFormControl from "./IdCreateFormControl";
import NameCreateFormControl from "./NameCreateFormControl";
import PasswordCreateFormControl from "./PasswordCreateFormControl";
import PasswordConfirmCreateFormControl from "./PasswordConfirmCreateFormControl";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  pt: 2,
  px: 4,
  pb: 3,
};

function UserCreateModal() {
  const [open, setOpen] = useAtom(userCreateModalOpenAtom);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            사용자 생성
          </Typography>
          <IconButton aria-label="close">
            <Close />
          </IconButton>
        </Box>
        <IdCreateFormControl />
        <PasswordCreateFormControl />
        <PasswordConfirmCreateFormControl />
        <NameCreateFormControl />
        <Box sx={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <Button variant="outlined">취소</Button>
          <Button variant="contained">생성</Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default UserCreateModal;
