import type { AppProps } from 'next/app'
import { Box, ChakraProvider, GlobalStyle, Text } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import { IntlProvider } from 'react-intl'
import { Fonts, theme } from '../theme/theme'
import Navbar from '../compounds/Nabar'
import Footer from '../compounds/Footer'

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient())
  const [closeSearchResults, setCloseSearchResults] = useState(true)

  return (
    <IntlProvider locale="de" onError={() => { }}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme} >
          <Fonts />
          <Navbar closeSearchResults={closeSearchResults} setCloseSearchResults={setCloseSearchResults} />
          <Component {...pageProps} closeSearchResults={closeSearchResults} />
          <Footer />
        </ChakraProvider>
      </QueryClientProvider>
    </IntlProvider>
  )
}

export default App