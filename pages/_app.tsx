import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { IntlProvider } from 'react-intl'
import Footer from '../compounds/Footer'
import Navbar from '../compounds/Navbar'
import { useAddItemToOrderMutation } from '../operations/mutation/useAddItemToOrderMutation'
import { useLoginMutation } from '../operations/mutation/useLoginMutation'
import { useActiveCustomerQuery } from '../operations/query/useActiveCustomerQuery'
import { useActiveOrderCart } from '../operations/query/useActiveOrderCart'
import { useFetchVariants } from '../operations/query/useFetchVariants'
import { Fonts, theme } from '../theme/theme'

const App = ({ Component, pageProps }: AppProps) => {
  const { variants, areVariantsLoading, setFacetNumber, pageNumber, setPageNumber, err } = useFetchVariants()
  const [queryClient] = useState(() => new QueryClient())
  const [closeSearchResults, setCloseSearchResults] = useState(true)
  const { activeCustomerData, refetch } = useActiveCustomerQuery()
  const { activeOrderCartData, refetchActiveOrderCartData } = useActiveOrderCart()
  const { getData, loginSuccesfully, isLoginDataFalse } = useLoginMutation()
  const { addItem } = useAddItemToOrderMutation(refetchActiveOrderCartData)

  return (
    <IntlProvider locale="de" onError={() => { }}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme} >
          <Fonts/>
          {err === 8 && (
            <Navbar
              loginSuccesfully={loginSuccesfully}
              closeSearchResults={closeSearchResults}
              setCloseSearchResults={setCloseSearchResults}
              isLoading={areVariantsLoading}
              activeCustomerData={activeCustomerData}
              refetch={refetch}
              activeOrderCartData={activeOrderCartData}
              refetchActiveOrderCartData={refetchActiveOrderCartData}
            />
          )}
          <Component
            getData={getData}
            addItem={addItem}
            loginSuccesfully={loginSuccesfully}
            isLoginDataFalse={isLoginDataFalse}
            activeCustomerData={activeCustomerData}
            refetch={refetch}
            {...pageProps}
            closeSearchResults={closeSearchResults}
            variants={variants}
            areVariantsLoading={areVariantsLoading}
            setFacetNumber={setFacetNumber}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            err={err}
            activeOrderCartData={activeOrderCartData}
            refetchActiveOrderCartData={refetchActiveOrderCartData}
          />
          <Footer/>
        </ChakraProvider>
      </QueryClientProvider>
    </IntlProvider>
  )
}

export default App
