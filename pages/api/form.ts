import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  data: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const body = req.body
  console.log('body details: ', body)

  // sending data back to frontend
  // if (!body.first || !body.last) {
    // return res.json({ data: 'First or last name not found' })
  // }

  // Found the name.
  res.json({ data: `Entered query is incorrect. Do you mean: ${body.content}` })
}
