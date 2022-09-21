import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const priceID = req.body.defaultPriceId;

  const success_url = `${process.env.NEXT_URL}/success`
  const cancel_url = `${process.env.NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price: priceID,
        quantity: 1
      }
    ],

    success_url: success_url,
    cancel_url: cancel_url
  })

  return res.status(201).json({
    checkoutSession: checkoutSession.url
  })
}
