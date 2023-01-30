import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { IntlProvider } from 'react-intl'
import Footer from '../compounds/Footer'
import Navbar from '../compounds/Navbar'
import { useFetchVariants } from '../operations/query/useFetchVariants'
import { Fonts, theme } from '../theme/theme'

const App = ({ Component, pageProps }: AppProps) => {
  const { variants, areVariantsLoading, setFacetNumber, pageNumber, setPageNumber, err } = useFetchVariants()
  const [queryClient] = useState(() => new QueryClient())
  const [closeSearchResults, setCloseSearchResults] = useState(true)

  return (
    <IntlProvider locale="de" onError={() => { }}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme} >
          <Fonts />
          {err == 8 && (
            <Navbar
              closeSearchResults={closeSearchResults}
              setCloseSearchResults={setCloseSearchResults}
              isLoading={areVariantsLoading}
            />
          )}
          <Component
            {...pageProps}
            closeSearchResults={closeSearchResults}
            variants={variants}
            areVariantsLoading={areVariantsLoading}
            setFacetNumber={setFacetNumber}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            err={err}
          />
          <Footer />
        </ChakraProvider>
      </QueryClientProvider>
    </IntlProvider>
  )
}

export default App