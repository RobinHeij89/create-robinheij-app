// In case of multiple sites
// import { Site } from '@constants/site';

export function getDevRevalidate (): 15 | null {
  return process.env.NODE_ENV === 'development' ? 15 : null
}

export function getCmsUrl (): string {
  return (
    process.env.CMS_URL ??
    process.env.NEXT_PUBLIC_CMS_URL ??
    ''
  )
}

export function getGTMKey (): string {
  return (
    process.env.GTM_KEY ??
    process.env.NEXT_PUBLIC_GTM_KEY ??
    ''
  )
}
