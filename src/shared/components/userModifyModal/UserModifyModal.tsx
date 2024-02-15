"use client";

import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import React, { useEffect } from "react";
import { userModifyModalOpenAtom } from "../../atoms/userModifyModalOpen.atom";
import Close from "@mui/icons-material/Close";
import IdModifyFormControl from "./IdModifyFormControl";
import NameModifyFormControl from "./NameModifyFormControl";
import { userModifyModalSelectUserAtom } from "@/shared/atoms/userModifyModalSelectUser.atom";
import { validateUserModifyAtom } from "@/shared/atoms/validateUserModify.atom";
import { validateName } from "@/shared/utils/validateModifyUser";
import { modifyUser } from "@/shared/service/user";

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
  const userInfo = useAtomValue(userModifyModalSelectUserAtom);
  const setValidationMessage = useSetAtom(validateUserModifyAtom);

  const handleClose = () => {
    setOpen(false);
  };

  const onClickSaveButton = async () => {
    if (userInfo.name === "") {
      setValidationMessage("이름을 입력하세요");
    } else if (validateName(userInfo.name)) {
      console.log(userInfo.name, "userInfo.name");
      setValidationMessage(
        "이름을 올바르게 입력하세요(숫자, 특수문자,공백 입력 불가)"
      );
    } else {
      setValidationMessage("");
      await modifyUser(userInfo.id, userInfo.name);
    }
  };

  useEffect(() => {
    return () => setValidationMessage("");
  }, [open, setValidationMessage]);

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
          <IconButton aria-label="close" onClick={handleClose}>
            <Close />
          </IconButton>
        </Box>

        <IdModifyFormControl id={userInfo.id} />
        <NameModifyFormControl />
        <Box sx={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <Button variant="outlined" onClick={handleClose}>
            취소
          </Button>
          <Button variant="contained" onClick={onClickSaveButton}>
            수정
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default UserModifyModal;
