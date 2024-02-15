"use client";

import {
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Modal,
  Typography,
} from "@mui/material";
import { useAtom } from "jotai";
import React from "react";
import { userModifyModalOpenAtom } from "../../atoms/userModifyModalOpen.atom";
import Close from "@mui/icons-material/Close";
import NameFormControl from "./NameModifyFormControl";
import IdModifyFormControl from "./IdModifyFormControl";
import NameModifyFormControl from "./NameModifyFormControl";

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

function UserModifyModal() {
  const [open, setOpen] = useAtom(userModifyModalOpenAtom);

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
        <Box
          sx={{ display: "flex", justifyContent: "space-between", p: "10px" }}
        >
          <Typography id="modal-modal-title" variant="h5" component="h2">
            사용자 수정
          </Typography>
          <IconButton aria-label="close">
            <Close />
          </IconButton>
        </Box>

        <NameModifyFormControl />
        <IdModifyFormControl />
        <Box sx={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <Button variant="outlined">취소</Button>
          <Button variant="contained">수정</Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default UserModifyModal;
