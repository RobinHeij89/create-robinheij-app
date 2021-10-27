import { getCmsUrl } from '@misc/environments'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function Robots (_: NextApiRequest, res: NextApiResponse): Promise<void> {
  res.write(`User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${getCmsUrl()}/sitemap.xml
`)
  res.end()
}
