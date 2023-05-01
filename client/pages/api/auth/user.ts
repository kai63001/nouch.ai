// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'


export default async function  handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const supabaseServerClient = createServerSupabaseClient<any>({
    req,
    res,
  })
  const {
    data: { user },
  } = await supabaseServerClient.auth.getUser()

  if (!user) {
    return res.status(401).json({ error: 'Not authenticated' })
  }
  
  const data:any = await supabaseServerClient.from('users').select('*').eq('id', user.id)

  if (data.data.length === 0) {
    return res.status(401).json({ error: 'Not authenticated' })
  }

  res.status(200).json(data.data[0])
}
