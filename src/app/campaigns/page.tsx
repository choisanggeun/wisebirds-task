import CampaignsTableRow from "@/shared/components/CampaignsTableRow";
import CustomPagination from "@/shared/components/CustomPagination";
import { gatAllCampaigns } from "@/shared/service/campaigns";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

interface SearchParamsProps {
  searchParams: {
    page: string;
  };
}

async function CampaignsPage({ searchParams }: SearchParamsProps) {
  const pageNumber = Number(searchParams.page ?? 1);
  const data = await gatAllCampaigns(pageNumber);

  return (
    <>
      <TableContainer>
        <Table
          sx={{ minWidth: 500, width: "100%" }}
          aria-label="custom pagination table"
        >
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
            {data?.content.map((row) => (
              <CampaignsTableRow key={row.id} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <CustomPagination
        totalCount={data.total_pages}
        page={pageNumber}
        pageName="campaigns"
      />
    </>
  );
}

export default CampaignsPage;
