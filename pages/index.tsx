import { Box, Container, Heading, HStack, SimpleGrid, Skeleton, Stack, useDisclosure, VStack } from "@chakra-ui/react";
import { useState } from "react";
import AccountMenu from "../compounds/AccountMenu";
import Filter from "../compounds/Filter";
import Pagination from "../compounds/Pagination";
import ProductItem from "../compounds/ProductItem";
import SearchLogic from "../compounds/SearchLogic";
import { formatFacetValues } from "../helper/formatFacetValues";
import { useFetchVariants } from "../operations/query/useFetchVariants";

const Home = () => {

  const { variants, isLoading: isDataLoading, setFacetId, facetId, site, setSite } = useFetchVariants()
  const [canHover, setCanHover] = useState<boolean>(true)
  const [closeSearchResults, setCloseSearchResults] = useState(true)
  const searchBar = useDisclosure()

  return (
    <Container maxW="container.xl">
      <VStack onMouseLeave={() => setCloseSearchResults(true)} spacing="0">
        <AccountMenu></AccountMenu>
        <Stack justify="center" align="center" pos="absolute" top="5">
          <HStack
            spacing={{ base: 0, xl: 8 }}
          >
            <Box w={{ lg: '200px', xl: '350px' }} >
              <SearchLogic setCanHover={setCanHover} closeSearchResults={closeSearchResults} setCloseSearchResults={setCloseSearchResults} />
            </Box>
          </HStack>
          {searchBar.isOpen && (
            <Box
              w="100%"
              h="200px"
            >
              <Box pos="relative" w="100%">
                <SearchLogic setCanHover={setCanHover} closeSearchResults={closeSearchResults} setCloseSearchResults={setCloseSearchResults} />
              </Box>
            </Box>
          )}
        </Stack>
        <HStack align="start" justify="space-between" w="full">
          <Filter setFacetId={setFacetId} facetId={facetId} facetValues={formatFacetValues(variants?.data.search.facetValues ?? [])} isLoading={isDataLoading} />
          <Box mx="auto" maxW={{ base: "2xl", lg: "7xl" }} py={{ base: "6", sm: "0" }} pl={{ base: "4", sm: "6", lg: "8" }}>
            <Heading as="h2" my="8">Products</Heading>
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gridGap='20px' mb="35px">
              {isDataLoading && [...Array(6)].map((e, i) => <Skeleton height='428px' w="277px" boxShadow="xl" key={'skeleton' + i} rounded="lg" />)}
              {!isDataLoading && variants?.data?.search.items.map((item, index) => {
                return (
                  <Box key={"index" + item && index} w="277px" h="428px">
                    <ProductItem canHover={canHover} item={item}></ProductItem>
                  </Box>
                )
              })}
            </SimpleGrid>
            <Pagination site={site} setSite={setSite} totalItems={variants?.data.search.totalItems ?? 0} isLoading={isDataLoading}></Pagination>
          </Box>
        </HStack>
      </VStack>
    </Container>
  )
}

export default Home