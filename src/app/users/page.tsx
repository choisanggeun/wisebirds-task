import React from "react";
import {
  Box,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { gatAllUsers } from "@/shared/service/users";
import UsersTableRow from "@/shared/components/UsersTableRow";
import UserModifyModal from "@/shared/components/UserModifyModal";
import UserCreateModal from "@/shared/components/UserCreateModal";

async function UsersPage() {
  const data = await gatAllUsers();
  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <TableCell align="left">아이디</TableCell>
              <TableCell align="left">이름</TableCell>
              <TableCell align="left">마지막 로그인 일시</TableCell>
              <TableCell align="left">수정</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.content.map((row) => (
              <UsersTableRow key={row.id} row={row} />
            ))}
          </TableBody>
          <TableFooter>
            <TableRow></TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      <UserModifyModal />
      <UserCreateModal />
    </>
  );
}

export default UsersPage;
