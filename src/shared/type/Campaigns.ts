export interface Campaigns {
  content: CampaignsContent[];
  size: number;
  total_elements: number;
  total_pages: number;
}

export interface CampaignsContent {
  id: number;
  name: string;
  enabled: boolean;
  campaign_objective: string;
  impressions: number;
  clicks: number;
  ctr: number;
  video_views: number;
  vtr: number;
}
