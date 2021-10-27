import React from 'react'
import Link from 'next/link'
import {
  useLocaleIdentifier, useLocaleIdentifiers
} from '@i18n/localization'
import { useRouter } from 'next/router'

export default function LanguageSwitch (): JSX.Element {
  const router = useRouter()
  const localeIdentifier = useLocaleIdentifier()
  const localeIdentifiers = useLocaleIdentifiers()

  return (
    <nav>
      <ul>
        {localeIdentifiers.map(l =>
          localeIdentifier.locale !== l.locale ? (
            <li key={l.locale}>
              <Link href={router.asPath} locale={l.locale}>
                {l.locale}
              </Link>
            </li>
          ) : (
            <li key={l.locale}>
              <span>{l.locale} &mdash; you are here</span>
            </li>
          )
        )}
      </ul>
    </nav>
  )
}
