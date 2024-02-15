import { TableCell, TableRow } from "@mui/material";
import React from "react";
import parseCampaignObject from "../utils/parseCampaignObject";
import { formatNumberWithCommas } from "../utils/formatNumberWithCommas";
import { CampaignsContent } from "../type/Campaigns";
import { formatPercentage } from "../utils/formatPercentage";
import CampaignsStatusCell from "./CampaignsStatusCell";

interface CampaignsTableRowProps {
  row: CampaignsContent;
}

function CampaignsTableRow({ row }: CampaignsTableRowProps) {
  return (
    <TableRow key={row.id}>
      <TableCell align="center">
        <CampaignsStatusCell row={row} />
      </TableCell>
      <TableCell align="left">{row.name}</TableCell>
      <TableCell align="left">
        {parseCampaignObject(row.campaign_objective)}
      </TableCell>
      <TableCell align="right">
        {formatNumberWithCommas(row.impressions)}
      </TableCell>
      <TableCell align="right">{formatNumberWithCommas(row.clicks)}</TableCell>
      <TableCell align="right">{formatPercentage(row.ctr)}</TableCell>
      <TableCell align="right">{row.video_views}</TableCell>
      <TableCell align="right">{formatPercentage(row.vtr)}</TableCell>
    </TableRow>
  );
}

export default CampaignsTableRow;
