import { useRouter } from 'next/router'

interface LocaleIdentifierReturnProps {
  locale: string
  toPath: (path?: string) => string
}

export type LocaleIdentifier = ReturnType<typeof resolveLocaleIdentifier>

export function useLocaleIdentifier (): LocaleIdentifierReturnProps {
  const router = useRouter()

  return resolveLocaleIdentifierByContext(router)
}

export function resolveLocaleIdentifierByContext (ctx: { locale?: string, locales?: string[], defaultLocale?: string }): LocaleIdentifier {
  return resolveLocaleIdentifier(ctx.locale ?? ctx.defaultLocale ?? '', ctx.defaultLocale ?? '')
}

function resolveLocaleIdentifier (locale: string, defaultLocale: string): LocaleIdentifierReturnProps {
  return {
    locale,
    toPath (path = '/') {
      if (this.locale === defaultLocale) {
        return path
      }

      return `/${this.locale}${path}`
    }
  }
}

export function useLocaleIdentifiers (): LocaleIdentifier[] {
  const router = useRouter()

  return resolveLocaleIdentifiersByContext(router)
}

export function resolveLocaleIdentifiersByContext (ctx: { locale?: string, locales?: string[], defaultLocale?: string }): LocaleIdentifier[] {
  return resolveLocaleIdentifiers(ctx.locales ?? [], ctx.defaultLocale ?? '')
}

function resolveLocaleIdentifiers (locales: string[], defaultLocale: string): LocaleIdentifier[] {
  return locales.map(locale => (
    resolveLocaleIdentifier(locale, defaultLocale)
  ))
}
