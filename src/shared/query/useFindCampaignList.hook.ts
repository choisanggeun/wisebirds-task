import { useQuery } from "@tanstack/react-query";
import { findCampaignList } from "../service/campaigns";

export function useFindCampaignList(page: number) {
  return useQuery({
    queryKey: ["campaigns", page],
    queryFn: () => findCampaignList(page),
  });
}
