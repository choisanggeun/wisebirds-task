import { readFile } from "fs/promises";
import path from "path";
import { cache } from "react";
import { Campaigns } from "../type/Campaigns";

// TODO: api완성되면 해당 서비스로 변경
// export const gatAllCampaigns = async (page: number): Promise<Campaigns> => {
//   return await fetch("api/campaigns", {
//     method: "GET",
//     body: JSON.stringify({
//       page,
//       size: 50,
//     }),
//   }).then((res) => res.json());
// };

export const gatAllCampaigns = cache(
  async (page: number): Promise<Campaigns> => {
    const filePath = path.join(process.cwd(), "data", "campaign.json");
    const data = readFile(filePath, "utf-8")
      .then(JSON.parse)
      .then((res) => {
        return {
          ...res,
          content: res.content.slice((page - 1) * 50, page * 50),
        };
      });
    return data;
  }
);

export const findCampaignList = async (page: number): Promise<Campaigns> => {
  const filePath = path.join(process.cwd(), "data", "campaign.json");
  const data = readFile(filePath, "utf-8")
    .then(JSON.parse)
    .then((res) => {
      return {
        ...res,
        content: res.content.slice((page - 1) * 50, page * 50),
      };
    });
  return data;
};
