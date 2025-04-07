import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { symbol = 'GME' } = req.query
  const period = Math.floor(Date.now() / 1000);
  const data = await fetch(`https://query2.finance.yahoo.com/v8/finance/chart/${symbol}?period1=${period}&period2=${period}&interval=1m&includePrePost=true`);
  const json = await data.json();
  return res.json(json);
}
