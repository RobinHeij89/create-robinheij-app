import React from 'react'
import { GetStaticProps } from 'next'

import { DEFAULT_REVALIDATE } from '@constants/revalidate'

import { Image } from '@components/atoms/Image/Component'

import Metatags from '@components/molecules/Metatags/Component'
import LanguageSwitch from '@components/organisms/LanguageSwitch/Component'

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    revalidate: DEFAULT_REVALIDATE,
    props: {
      date: new Date().toString()
    }
  }
}

export default function Homepage (props: { date: string }): JSX.Element {
  return (
    <>
      <Metatags
        {...{
          title: 'Page title',
          description: 'Page description',
          hrefLangLinks: [{ language: 'en', url: 'https://some.url/en' }]
        }}
      />
      <h1>create-robinheij-app</h1>
      <small>{props.date}</small>
      <Image
        src='https://i.imgur.com/CQ7fTDW.jpeg'
        width={500}
        height={100}
        objectFit='cover'
      />
      <LanguageSwitch />
    </>
  )
}
