"use client";

import { Divider, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import React from "react";

function PageTitle() {
  const pathName = usePathname();
  const pathMainName = pathName.split("/")[1];

  if (pathMainName === "") {
    return null;
  }

  return (
    <>
      <Typography variant="h5" component="h1" gutterBottom sx={{ p: 2 }}>
        {pathMainName === "users" && "사용자 관리"}
        {pathMainName === "campaigns" && "캠페인 관리"}
      </Typography>
      <Divider />
    </>
  );
}

export default PageTitle;
