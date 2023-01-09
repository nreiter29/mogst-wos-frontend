import { Box, Heading, HStack, Image, SimpleGrid, Skeleton, Stack, StackDivider, Text, useDisclosure, useOutsideClick, VStack } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import Filter from "../compounds/Filter";
import ProductItem from "../compounds/ProductItem";
import { SearchBar } from "../compounds/SearchBar";
import { formatHeadlineColor } from "../helper/formatHeadlineColor";
import { useDebounce } from "../helper/useDebounce";
import { useFetchData } from "../operations/fetcher";
import { useSearchQuery } from "../operations/useSearchQuery";
import { CustomLink } from "../utility/CustomLink";

const Home = () => {

  const { data: products, isLoading: isDataLoading, setFacetId, facetId } = useFetchData()

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

  return (
    <VStack onMouseLeave={() => setCloseSearchResults(true)}>
      <Stack spacing={0} justify="center" align="center" pt="5">
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
      <HStack align="space-between" spacing="25px">
        <Filter setFacetId={setFacetId} facetId={facetId} />
        <Box mx="auto" maxW={{ base: "2xl", lg: "7xl" }} py={{ base: "6", sm: "0" }} px={{ base: "4", sm: "6", lg: "8" }}>
          <Heading as="h2" my="8">Products</Heading>
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 3, xl: 4 }} gridGap='20px'>
            {isDataLoading && [...Array(12)].map((e, i) => <Skeleton height='435px' boxShadow="xl" key={'skeleton' + i} rounded="lg" />)}
            {!isDataLoading && products?.data?.search.items.map((item, index) => {
              return (
                <Box key={"index" + item && index}>
                  <ProductItem canHover={canHover} item={item}></ProductItem>
                </Box>
              )
            })}
          </SimpleGrid>
        </Box>
      </HStack>
    </VStack>
  )
}

export default Home