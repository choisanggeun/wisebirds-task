"use client";

import { Pagination, Stack } from "@mui/material";
import React from "react";

interface CustomPaginationProps {
  pageName: string;
  totalCount: number;
  page: number;
}

function CustomPagination({
  totalCount,
  page,
  pageName,
}: CustomPaginationProps) {
  const onChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    window.location.href = `/${pageName}?page=${value}`;
  };

  return (
    <Stack spacing={2} sx={{ alignItems: "center", p: 5 }}>
      <Pagination count={totalCount} onChange={onChangePage} page={page} />
    </Stack>
  );
}

export default CustomPagination;
