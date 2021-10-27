import React from 'react'
import Error from 'next/error'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { getKlot } from '@i18n/translate'
import LanguageSwitch from '@components/organisms/LanguageSwitch/Component'
import { DEFAULT_NOT_FOUND_REVALIDATE } from '@constants/revalidate'
import { resolveLocaleIdentifierByContext } from '@i18n/localization'

export const getStaticProps: GetStaticProps<{ title: string }> = async ctx => {
  const localeIdentifier = resolveLocaleIdentifierByContext(ctx)

  const klot = getKlot(localeIdentifier)

  return {
    revalidate: DEFAULT_NOT_FOUND_REVALIDATE,
    props: {
      title: klot('Page not found')
    }
  }
}

export default function NotFound (
  props: InferGetStaticPropsType<typeof getStaticProps>
): JSX.Element {
  return (
    <>
      <LanguageSwitch />
      <Error title={props.title} statusCode={404} />
    </>
  )
}
