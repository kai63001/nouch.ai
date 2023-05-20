// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";
import Stripe from "stripe";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  //get country from body
  const { country } = req.body;
  //check if country is valid
  if (!country) {
    return res.status(400).json({ error: "Country is required" });
  }
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
    {
      global: { headers: { Authorization: req.headers.authorization! } },
    }
  );

  //? RLS USER CAN SEE ONLY THERE ACCOUINT
  const { data, error } = await supabase
    .from("users")
    .select("id,username,email,stripe_account_id")
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  //! IF USER HAS STRIPE ACCOUNT
  if (data?.stripe_account_id) {
    return res.status(200).json({ data });
  }

  const stripe = new Stripe(
    "sk_test_51MO2a8D2IbEoo6OdbntJ3h048kOzZUBrv43bRiG0sH39KGmgFogbtI3daRY80vdYbHWGkM5yIoHCZILXCMnA7F9700Vq7bsEOI",
    {
      timeout: 20 * 1000,
      apiVersion: "2022-11-15",
    }
  );

  const account = await stripe.accounts.create({
    type: "standard",
    country: country,
    email: data.email,
  });

  const { error: error2 } = await supabase
    .from("users")
    .update({ stripe_account_id: account.id })
    .eq("id", data.id);
  if (error2) {
    return res.status(500).json({ error: error2.message });
  }

  const accountLinks = await stripe.accountLinks.create({
    account: account.id,
    refresh_url: "https://example.com/reauth",
    return_url: "https://example.com/return",
    type: "account_onboarding",
  });

  return res.status(200).json({ ...accountLinks });
}
