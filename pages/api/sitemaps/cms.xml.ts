import axios, { AxiosRequestConfig } from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import NodeCache from 'node-cache'
import { gzipSync } from 'zlib'
import { DEFAULT_SITEMAP_REVALIDATE } from '@constants/revalidate'
import { getCmsUrl } from '@misc/environments'

const cache = new NodeCache({ stdTTL: DEFAULT_SITEMAP_REVALIDATE })

export default async function (req: NextApiRequest, res: NextApiResponse): Promise<void> {
  res.setHeader(
    'Cache-Control',
    `s-maxage=${DEFAULT_SITEMAP_REVALIDATE}, stale-while-revalidate`
  )
  res.setHeader('Content-Type', 'application/xml')
  res.setHeader('Content-Encoding', 'gzip')

  if (cache.has('sitemap')) {
    res.send(cache.get('sitemap'))
    res.end()
    return
  }

  try {
    if (req.method !== 'GET') {
      res.status(405).end()
      return
    }

    const url = new URL(getCmsUrl())

    const requestConfig: AxiosRequestConfig = {
      method: 'GET',
      url: `${url.origin}/sitemap.xml`
    }

    const response = await axios(requestConfig)

    const buffer = await Buffer.from(response.data, 'utf-8')

    const data = gzipSync(buffer)

    cache.set('sitemap', data)

    res.send(data)

    res.end()
  } catch (error) {
    res.status(400).json({ error })
  }
}
