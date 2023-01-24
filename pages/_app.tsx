import type { AppProps } from 'next/app'
import { Box, ChakraProvider, GlobalStyle, Text } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import { IntlProvider } from 'react-intl'
import { Fonts, theme } from '../theme/theme'
import Navbar from '../compounds/Navbar'
import Footer from '../compounds/Footer'
import { useFetchVariants } from '../operations/query/useFetchVariants'

const App = ({ Component, pageProps }: AppProps) => {
  const { variants, areVariantsLoading, setFacetNumber, pageNumber, setPageNumber } = useFetchVariants()
  const [queryClient] = useState(() => new QueryClient())
  const [closeSearchResults, setCloseSearchResults] = useState(true)

  return (
    <IntlProvider locale="de" onError={() => { }}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme} >
          <Fonts />
          <Navbar
            closeSearchResults={closeSearchResults}
            setCloseSearchResults={setCloseSearchResults}
            isLoading={areVariantsLoading}
          />
          <Component
            {...pageProps}
            closeSearchResults={closeSearchResults}
            variants={variants}
            areVariantsLoading={areVariantsLoading}
            setFacetNumber={setFacetNumber}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
          />
          <Footer />
        </ChakraProvider>
      </QueryClientProvider>
    </IntlProvider>
  )
}

export default App