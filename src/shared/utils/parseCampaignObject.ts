import { campaignObjective } from "../constant/campaignObjective";

function parseCampaignObject(param: string): string {
  const result = campaignObjective[param];
  return result ? result : "알 수 없음";
}

export default parseCampaignObject;
