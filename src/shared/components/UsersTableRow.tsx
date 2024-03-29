"use client";

import React from "react";
import { Button, TableCell, TableRow } from "@mui/material";
import { UsersContent } from "../type/Users";
import { useSetAtom } from "jotai";
import { userModifyModalOpenAtom } from "../atoms/userModifyModalOpen.atom";
import { userModifyModalSelectUserAtom } from "../atoms/userModifyModalSelectUser.atom";

interface UserTableRowProps {
  row: UsersContent;
}

function UsersTableRow({ row }: UserTableRowProps) {
  const setOpenModal = useSetAtom(userModifyModalOpenAtom);
  const setUserInfo = useSetAtom(userModifyModalSelectUserAtom);
  const handleOpen = () => {
    setUserInfo({ id: row.email, name: row.name });
    setOpenModal(true);
  };

  return (
    <TableRow key={row.id}>
      <TableCell align="left">{row.email}</TableCell>
      <TableCell align="left">{row.name}</TableCell>
      <TableCell align="left">{row.last_login_at}</TableCell>
      <TableCell align="left">
        <Button onClick={handleOpen}>수정</Button>
      </TableCell>
    </TableRow>
  );
}

export default UsersTableRow;
