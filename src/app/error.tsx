"use client"; // Error components must be Client Components

import { Box, Button, Modal } from "@mui/material";
import { useEffect, useState } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const [open, setOpen] = useState(true);
  return (
    <Modal
      open={open}
      onClose={reset}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        에러가 발생했습니다.
        <br />
        같은 현상이 반복되면 고객센터로 문의 바랍니다.
        <br />
        <br />
        *고객센터
        <br />
        -email:helpdesk@wisebirds.ai
        <Box sx={{ display: "flex", gap: "10px", justifyContent: "right" }}>
          <Button variant="contained" onClick={() => setOpen(false)}>
            확인
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

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
