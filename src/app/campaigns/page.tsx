import CampaignsTableRow from "@/shared/components/CampaignsTableRow";
import { gatAllCampaigns } from "@/shared/service/campaigns";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

async function CampaignsPage() {
  const data = await gatAllCampaigns();

  return (
    <TableContainer>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell align="center">상태</TableCell>
            <TableCell align="left">캠페인명</TableCell>
            <TableCell align="left">캠페인목적</TableCell>
            <TableCell align="right">노출수</TableCell>
            <TableCell align="right">클릭수</TableCell>
            <TableCell align="right">CTR</TableCell>
            <TableCell align="right">동영상 조회수</TableCell>
            <TableCell align="right">VTR</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.content.map((row) => (
            <CampaignsTableRow key={row.id} row={row} />
          ))}
        </TableBody>
        <TableFooter>
          <TableRow></TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

export default CampaignsPage;
