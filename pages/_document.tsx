import { ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
import { theme } from '../theme/theme'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initinalColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}