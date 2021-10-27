import klot from 'klot'
import { useLocaleIdentifier, LocaleIdentifier } from '@i18n/localization'
import en from '@i18n/translations/en.json'
import nl from '@i18n/translations/nl.json'
import fr from '@i18n/translations/fr.json'
import pl from '@i18n/translations/pl.json'
import { useMemo } from 'react'

type Language = 'en' | 'nl' | 'fr' | 'pl'

// Important: getKlot requires the type to be determine by Klot, else it doesn't
// really make sense to use Klot.
// eslint-disable-next-line
export function useKlot () {
  const localeIdentifier = useLocaleIdentifier()

  const memo = useMemo(() => getKlot(localeIdentifier), [localeIdentifier])

  return memo
}

// Important: getKlot requires the type to be determine by Klot, else it doesn't
// really make sense to use Klot.
// eslint-disable-next-line
export function getKlot (localeIdentifier: LocaleIdentifier) {
  return klot(localeIdentifier.locale as Language, { en, nl, fr, pl })
}
