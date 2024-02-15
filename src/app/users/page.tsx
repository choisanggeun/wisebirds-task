import React from "react";
import {
  Pagination,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { gatAllUsers } from "@/shared/service/users";
import UsersTableRow from "@/shared/components/UsersTableRow";
import UserModifyModal from "@/shared/components/userModifyModal/UserModifyModal";
import UserCreateModal from "@/shared/components/userCreateModal/UserCreateModal";
import AddUserButton from "@/shared/components/AddUserButton";

async function UsersPage() {
  const data = await gatAllUsers();
  return (
    <>
      <AddUserButton />
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
        </Table>
      </TableContainer>
      <Stack spacing={2}>
        <Pagination count={4} showFirstButton showLastButton />
      </Stack>
      <UserModifyModal />
      <UserCreateModal />
    </>
  );
}

export default UsersPage;
