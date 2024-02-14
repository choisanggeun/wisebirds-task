"use client";

import { Switch, TableCell, TableRow } from "@mui/material";
import React from "react";
import parseCampaignObject from "../utils/parseCampaignObject";
import { formatNumberWithCommas } from "../utils/formatNumberWithCommas";
import { CampaignsContent } from "../type/Campaigns";
import { formatPercentage } from "../utils/formatPercentage";

const label = { inputProps: { "aria-label": "Switch demo" } };

interface CampaignsTableRowProps {
  row: CampaignsContent;
}

function CampaignsTableRow({ row }: CampaignsTableRowProps) {
  return (
    <TableRow key={row.id}>
      <TableCell align="center">
        <Switch {...label} checked={row.enabled} />
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
