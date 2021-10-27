import React from 'react'
import NextImage, { ImageProps } from 'next/image'

type Props = {
} & ImageProps

export function Image (props: Props): JSX.Element {
  return <NextImage {...props} />
}
