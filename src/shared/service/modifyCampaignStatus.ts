import { NextResponse } from "next/server";

export const modifyCampaignStatus = async (id: number, enabled: boolean) => {
  try {
    await fetch(`api/campaigns/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        enabled,
      }),
    })
      .then((res) => NextResponse.json(res))
      .catch((error) => new Response(JSON.stringify(error), { status: 500 }));
  } catch (e) {
    console.log(e);
  }
};
