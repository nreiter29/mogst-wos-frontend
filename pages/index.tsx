import { Box, Container, Heading, HStack, Image, SimpleGrid, Skeleton, Stack, StackDivider, Text, useDisclosure, useOutsideClick, VStack } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import Filter from "../compounds/Filter";
import Pagination from "../compounds/Pagination";
import ProductItem from "../compounds/ProductItem";
import AccountMenu from "../compounds/AccountMenu";
import { SearchBar } from "../compounds/SearchBar";
import { formatHeadlineColor } from "../helper/formatHeadlineColor";
import { useDebounce } from "../helper/useDebounce";
import { useFetchData } from "../operations/useFetcherData";
import { useSearchQuery } from "../operations/useSearchQuery";
import { CustomLink } from "../utility/CustomLink";

const Home = () => {

  const { data: products, isLoading: isDataLoading, setFacetId, facetId, site, setSite } = useFetchData()

  const searchBar = useDisclosure()
  const [searchInput, setSearchInput] = useState('')
  const debouncedSearchInput = useDebounce(searchInput, 500)
  const { data, isLoading, refetch } = useSearchQuery(searchInput)


  useEffect(() => {
    if (debouncedSearchInput.length > 2 && data?.data.search.items.length != 0) {
      refetch()
    }
  }, [debouncedSearchInput.length, refetch])

  const ref = useRef(null)
  const [closeSearchResults, setCloseSearchResults] = useState(true)
  useOutsideClick({
    ref: ref,
    handler: () => setCloseSearchResults(true),
  })

  let canHover = true

  const searchLogic = (
    <>
      <SearchBar
        zIndex={1000}
        isLoading={isLoading ? false : isLoading}
        borderBottomRadius={(!closeSearchResults) ? 0 : 20}
        w="inherit"
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
        searchOpen={!closeSearchResults}
        isInvalid={data?.data.search?.items?.length == 0}
        errorBorderColor="red"
        onClick={() => setCloseSearchResults(false)}
      />
      {!closeSearchResults && (
        <Stack
          spacing={0}
          border="1px"
          borderTop="none"
          borderColor="gray.300"
          bg="white"
          position="absolute"
          w="inherit"
          divider={<StackDivider borderColor="gray.300" />}
          maxH="500px"
          overflowY="auto"
          ref={ref}
        >
          {data?.data.search?.items.map((item, index) => {
            canHover = false
            return (
              <Skeleton isLoaded={!isLoading} key={"Searchbar" + item.sku + index}>
                <Box
                  color="secondaryText.900"
                  _hover={{ bgColor: "gray.200" }}
                  p="10px"
                  transition="0.25s"
                >
                  <CustomLink href={`/product/${item.slug}?sku=${item.sku}`} onClick={() => setSearchInput('')} _hover={{ textDecor: "none" }}>
                    <HStack spacing="2">
                      <Image h="75px"
                        w="75px"
                        objectFit="cover"
                        objectPosition="center"
                        src={item.productVariantAsset?.preview ?? "https://images.unsplash.com/photo-1661006670127-b560e732ce28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"}
                        alt={item.productVariantName ?? "Standard Picture"} />
                      <VStack spacing="0" align="flex-start">
                        <Text fontWeight="bold" _hover={{ color: 'accent.500' }} transition="0.25s">
                          {formatHeadlineColor(item.productVariantName)}
                        </Text>
                        <Text color="gray">
                          Artikelnummer: {item.sku}
                        </Text>
                      </VStack>
                    </HStack>
                  </CustomLink>
                </Box>
              </Skeleton>
            )
          })}
        </Stack>
      )
      }
      {
        (!closeSearchResults && data?.data.search?.items.length === 0) && (
          <Box
            border="1px"
            borderTop="none"
            borderColor="gray.300"
            bg="white"
            position="absolute"
            w="inherit"
            padding="15px"
          >
            <Text fontWeight="bold">
              No results found
            </Text>
          </Box>
        )
      }
    </>
  )

  function formatFacetValues(facetValues: Array<{
    facetValue: {
      name: string
      id: string
      facet: {
        name: string
        id: string
      }
    }
  }>) {
    const formattedValues: { [key: string]: Array<{ name: string, id: string }> } = {}
    facetValues.forEach(facetValue => {
      if (formattedValues[facetValue.facetValue.facet.name]) {
        formattedValues[facetValue.facetValue.facet.name].push({
          name: facetValue.facetValue.name, id: facetValue.facetValue.id,
        })
      } else {
        formattedValues[facetValue.facetValue.facet.name] = [{ name: facetValue.facetValue.name, id: facetValue.facetValue.id }]
      }
    })

    return formattedValues
  }

  return (
    <Container maxW="container.xl">
      <VStack onMouseLeave={() => setCloseSearchResults(true)} spacing="0">
        <AccountMenu></AccountMenu>
        <Stack justify="center" align="center" pos="absolute" top="5">
          <HStack
            spacing={{ base: 0, xl: 8 }}
          >
            <Box w={{ lg: '200px', xl: '350px' }} >
              {searchLogic}
            </Box>
          </HStack>
          {searchBar.isOpen && (
            <Box
              w="100%"
              h="200px"
            >
              <Box pos="relative" w="100%">
                {searchLogic}
              </Box>
            </Box>
          )}
        </Stack>
        <HStack align="start" justify="space-between" w="full">
          <Filter setFacetId={setFacetId} facetId={facetId} facetValues={formatFacetValues(products?.data.search.facetValues ?? [])} isLoading={isDataLoading} />
          <Box mx="auto" maxW={{ base: "2xl", lg: "7xl" }} py={{ base: "6", sm: "0" }} pl={{ base: "4", sm: "6", lg: "8" }}>
            <Heading as="h2" my="8">Products</Heading>
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gridGap='20px' mb="35px">
              {isDataLoading && [...Array(6)].map((e, i) => <Skeleton height='428px' w="277px" boxShadow="xl" key={'skeleton' + i} rounded="lg" />)}
              {!isDataLoading && products?.data?.search.items.map((item, index) => {
                return (
                  <Box key={"index" + item && index} w="277px" h="428px">
                    <ProductItem canHover={canHover} item={item}></ProductItem>
                  </Box>
                )
              })}
            </SimpleGrid>
            <Pagination site={site} setSite={setSite} totalItems={products?.data.search.totalItems ?? 0} isLoading={isDataLoading}></Pagination>
          </Box>
        </HStack>
      </VStack>
    </Container>
  )
}

export default Home