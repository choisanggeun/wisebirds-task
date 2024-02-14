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

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Close from "@mui/icons-material/Close";
import { userModifyModalOpenAtom } from "../atoms/userModifyModalOpen.atom";
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
  const [open, setOpen] = useAtom(userModifyModalOpenAtom);

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const [showPasswordConfirm, setShowPasswordConfirm] = React.useState(false);
  const handleClickShowPasswordConfirm = () =>
    setShowPasswordConfirm((show) => !show);
  const handleMouseDownPasswordConfirm = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

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
          <IconButton
            aria-label="close"
            onClick={handleClickShowPasswordConfirm}
            onMouseDown={handleMouseDownPasswordConfirm}
          >
            <Close />
          </IconButton>
        </Box>

        <FormControl sx={{ m: 1, width: "500px" }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">아이디</InputLabel>
          <Input id="standard-adornment-name" type="text" />
        </FormControl>

        <FormControl sx={{ m: 1, width: "500px" }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            비밀번호
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
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
        </FormControl>
        <FormControl sx={{ m: 1, width: "500px" }} variant="standard">
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
        </FormControl>
        <FormControl sx={{ m: 1, width: "500px" }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">이름</InputLabel>
          <Input id="standard-adornment-name" type="text" />
        </FormControl>
        <Box sx={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <Button variant="outlined">취소</Button>
          <Button variant="contained">생성</Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default UserCreateModal;
