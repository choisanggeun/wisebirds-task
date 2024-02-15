"use client";

import React from "react";
import Providers from "../utils/provider";
import CampaignsTableRow from "./CampaignsTableRow";
import { useFindCampaignList } from "../query/useFindCampaignList.hook";

function CampaignsList() {
  const { data } = useFindCampaignList(1);
  return (
    <Providers>
      {data?.content.map((row) => (
        <CampaignsTableRow key={row.id} row={row} />
      ))}
    </Providers>
  );
}

export default CampaignsList;
