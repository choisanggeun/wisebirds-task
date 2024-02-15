"use client";

import { Pagination, Stack } from "@mui/material";
import React from "react";

interface CustomPaginationProps {
  count: number;
  page: number;
}

function CustomPagination({ count, page }: CustomPaginationProps) {
  const onChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    window.location.href = `/campaigns?page=${value}`;
  };

  return (
    <Stack spacing={2} sx={{ alignItems: "center", p: 5 }}>
      <Pagination count={count} onChange={onChangePage} page={page} />
    </Stack>
  );
}

export default CustomPagination;
