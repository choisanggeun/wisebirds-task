import React from "react";
import {
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
import CustomPagination from "@/shared/components/CustomPagination";

interface SearchParamsProps {
  searchParams: {
    page: string;
  };
}

async function UsersPage({ searchParams }: SearchParamsProps) {
  const pageNumber = Number(searchParams.page ?? 1);
  const data = await gatAllUsers(pageNumber);

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
      <CustomPagination
        totalCount={data.total_pages}
        page={pageNumber}
        pageName="users"
      />
      <UserModifyModal />
      <UserCreateModal />
    </>
  );
}

export default UsersPage;
