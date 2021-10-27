import React from 'react'
import Document, {
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'
import { Head as GtmHead, Body as GtmBody } from '@lib/react-gtm'
import PerformanceMark from '@lib/react-performance-api/performance-mark/Component'
import { getGTMKey } from '@misc/environments'

export default class MyDocument extends Document {
  render (): JSX.Element {
    const containerId = getGTMKey()

    return (
      <Html>
        <Head>
          <PerformanceMark name='head-start' />
          <link rel='preconnect' href='https://imgur.com' />

          <PerformanceMark name='gtm-start' />
          <GtmHead containerId={containerId} />
          <PerformanceMark name='gtm-end' />

          <PerformanceMark name='google-fonts-start' />
          <link
            href='https://fonts.googleapis.com/css2?family=Noto+Sans+Display:ital,wght@0,600;1,400;1,700&display=swap'
            rel='stylesheet'
          />
          <PerformanceMark name='google-fonts-end' />

          <PerformanceMark name='head-end' />

        </Head>
        <body>
          <PerformanceMark name='body-start' />

          <GtmBody containerId={containerId} />

          <PerformanceMark name='main-start' />
          <Main />
          <PerformanceMark name='main-end' />

          <PerformanceMark name='next-scripts-body-start' />
          <NextScript />
          <PerformanceMark name='next-scripts-body-end' />

          <PerformanceMark name='body-end' />
        </body>
      </Html>
    )
  }
}
