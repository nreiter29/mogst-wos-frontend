import { VStack, Stack, Box, Container } from "@chakra-ui/react"
import AccountMenu from "./AccountMenu"
import Search from "./Search"

const Navbar: React.FC<{
  closeSearchResults: boolean,
  setCloseSearchResults: (v: boolean) => void
}> = ({ closeSearchResults, setCloseSearchResults }) => {
  return (
    <Container maxW="container.xl">
      <VStack spacing="0">
        <AccountMenu />
        <Stack justify="center" align="center" pos="absolute" top="5">
          <Box w={{ lg: '200px', xl: '350px' }} >
            <Search closeSearchResults={closeSearchResults} setCloseSearchResults={setCloseSearchResults} />
          </Box>
        </Stack>
      </VStack>
    </Container>
  )
}

export default Navbar