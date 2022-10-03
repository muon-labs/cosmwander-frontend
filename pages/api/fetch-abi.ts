// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
import { getQueryClientCosmWasm } from '../../src/utils/utils'

// type Data = {
//   result: { [key: string]: any } | null
// }

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    res.status(405).send('Method Not Allowed')
  }

  const { chainId, code_id, address } = req.query

  // fetch from firebase if we have it
  res.status(200).json({ result: null })
}
