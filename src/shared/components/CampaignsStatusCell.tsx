"use client";

import { Switch } from "@mui/material";
import { useAtomValue } from "jotai";
import React from "react";
import { authAtom } from "../atoms/auth.atom";
import { CampaignsContent } from "../type/Campaigns";
import { modifyCampaignStatus } from "../service/modifyCampaignStatus";

const label = { inputProps: { "aria-label": "Switch demo" } };

interface Props {
  row: CampaignsContent;
}

function CampaignsStatusCell({ row }: Props) {
  const auth = useAtomValue(authAtom);
  const isViewer = auth === "viewer";

  const onChangeToggle = async () => {
    await modifyCampaignStatus(row.id, !row.enabled);
  };

  return (
    <Switch
      {...label}
      checked={row.enabled}
      disabled={isViewer}
      onChange={onChangeToggle}
    />
  );
}

export default CampaignsStatusCell;
