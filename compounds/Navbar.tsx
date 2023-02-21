import { Box, Container, Stack, VStack } from '@chakra-ui/react'
import type { IActiveCustomerData } from '../operations/query/useActiveCustomerQuery'
import type { IActiveOrderCartVariants } from '../operations/query/useActiveOrderCart'
import AccountMenu from './AccountMenu'
import Search from './Search'

const Navbar: React.FC<{
  closeSearchResults: boolean
  setCloseSearchResults: (v: boolean) => void
  isLoading: boolean
  activeCustomerData?: IActiveCustomerData | undefined
  refetch: () => void
  refetchActiveOrderCartData: () => void
  activeOrderCartData: IActiveOrderCartVariants | undefined
  loginSuccesfully: boolean
}> = ({
  closeSearchResults,
  setCloseSearchResults,
  isLoading,
  activeCustomerData,
  refetch,
  refetchActiveOrderCartData,
  activeOrderCartData,
  loginSuccesfully,
}) => {
  return (
    <Container maxW="container.xl">
      <VStack spacing="0">
        <AccountMenu
          isLoading={isLoading}
          activeCustomerData={activeCustomerData}
          refetch={refetch}
          refetchActiveOrderCartData={refetchActiveOrderCartData}
          activeOrderCartData={activeOrderCartData}
          loginSuccesfully={loginSuccesfully}
        />
        <Stack justify="center" align="center" pos="absolute" top="5">
          <Box w={{ lg: '200px', xl: '350px' }} >
            <Search
              closeSearchResults={closeSearchResults}
              setCloseSearchResults={setCloseSearchResults}
              isLoading={isLoading}
            />
          </Box>
        </Stack>
      </VStack>
    </Container>
  )
}

export default Navbar
