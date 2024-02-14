import { readFile } from "fs/promises";
import path from "path";
import { cache } from "react";
import { Campaigns } from "../type/Campaigns";

export const gatAllCampaigns = cache(async (): Promise<Campaigns> => {
  const filePath = path.join(process.cwd(), "data", "campaign.json");

  return readFile(filePath, "utf-8").then(JSON.parse);
});
