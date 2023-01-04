import { As, Box, Button, Flex, Grid, Heading, HStack, Image, SimpleGrid, Skeleton, SkeletonText, Square, Stack, StackDivider, Text, useDisclosure, useOutsideClick, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { SearchBar } from "../compounds/SearchBar";
import { formatHeadlineColor } from "../helper/formatHeadlineColor";
import toBusinessNumber from "../helper/toBusinessNumber";
import { useDebounce } from "../helper/useDebounce";
import useFetchData, { IProductData } from "../operations/fetcher"
import { SearchQuery, useSearchQuery } from "../helper/generated";
import { NextLink } from "../utility/NextLink";

const Home = () => {

  const { isLoading: isDataLoading, data: products } = useFetchData()

  const searchBar = useDisclosure()
  const [searchInput, setSearchInput] = useState('')
  const debouncedSearchInput = useDebounce(searchInput, 500)
  const { data, isLoading, fetchStatus, refetch } = useSearchQuery({ input: debouncedSearchInput }, { enabled: false })
  const [searchResults, setSearchResults] = useState<SearchQuery | undefined>()

  useEffect(() => {
    if (debouncedSearchInput.length > 2) {
      refetch()
    }
    setSearchResults(data)
    return () => {
      setSearchResults(undefined)
    }
  }, [data, debouncedSearchInput.length, refetch])

  const ref = useRef(null)
  const [closeSearchResults, setCloseSearchResults] = useState(false)
  useOutsideClick({
    ref: ref,
    handler: () => setCloseSearchResults(true),
  })

  let canHover = true

  const searchLogic = (
    <>
      <SearchBar
        zIndex={1000}
        // here we check the status of the query since when the query is idle the default for isLoading is true for some reason
        // https://github.com/TanStack/query/issues/3584
        isLoading={fetchStatus === 'idle' ? false : isLoading}
        borderBottomRadius={(!closeSearchResults && searchResults) ? 0 : 20}
        w="inherit"
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
        searchOpen={!closeSearchResults && searchResults && searchResults.search.items.length > 0}
        isInvalid={searchResults?.search.items.length === 0}
        errorBorderColor="failedColor.500"
        onClick={() => setCloseSearchResults(false)}
      />
      {(!closeSearchResults && searchResults && searchResults.search.items.length > 0) && (
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
          {searchResults.search.items.map((item, index) => {
            canHover = false
            return (
              <Skeleton isLoaded={!isLoading} key={item.sku + index}>
                <Box
                  color="secondaryText.900"
                  _hover={{ bgColor: "gray.200" }}
                  p="10px"
                  transition="0.25s"
                >
                  <NextLink href={`/product/${item.slug}?sku=${item.sku}`} onClick={() => setSearchInput('')} _hover={{ textDecor: "none" }}>
                    <HStack spacing="2">
                      <Image h="75px" w="75px" objectFit="cover" objectPosition="center" src={item.productVariantAsset?.preview ?? "https://images.unsplash.com/photo-1661006670127-b560e732ce28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"} alt={item.productVariantName ?? "Standard Picture"} />
                      <VStack spacing="0" align="flex-start">
                        <Text fontWeight="bold" _hover={{ color: 'accent.500' }} transition="0.25s">
                          {formatHeadlineColor(item.productVariantName)}
                        </Text>
                        <Text color="gray">
                          Artikelnummer: {item.sku}
                        </Text>
                      </VStack>
                    </HStack>
                  </NextLink>
                </Box>
              </Skeleton>
            )
          })}
        </Stack>
      )
      }
      {
        (!closeSearchResults && searchResults && searchResults?.search.items.length === 0) && (
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
              Kein Ergebnis gefunden
            </Text>
          </Box>
        )
      }
    </>
  )

  return (
    <Box>
      <Stack spacing={0} justify="center" align="center" pt="5">
        <HStack
          spacing={{ base: 0, xl: 8 }}
          display={{ base: 'none', xl: 'inherit' }}
        >
          <Box w={{ lg: '200px', xl: '350px' }} >
            {searchLogic}
          </Box>
        </HStack>
        {searchBar.isOpen && (
          <Box
            // position="absolute"
            // left={0}
            // top={0}
            w="100%"
            h="200px"
            // p={5}
            display={{ base: 'inherit', lg: 'none' }}
          >
            <Box pos="relative" w="100%">
              {searchLogic}
            </Box>
          </Box>
        )}
      </Stack>
      <Box mx="auto" maxW={{ base: "2xl", lg: "7xl" }} py={{ base: "6", sm: "0" }} px={{ base: "4", sm: "6", lg: "8" }}>
        <Heading as="h2" pb="2" pt="10">Products</Heading>
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3, xl: 4 }} gridGap='20px'>
          {isDataLoading && [...Array(12)].map((e, i) => <Skeleton height='380px' key={'skeleton' + i} />)}
          {!isDataLoading && products?.data.search.items.map((item) => {
            return (
              <Box _hover={{ opacity: canHover && 0.75 }} transition="1s" key={item.sku} >
                <Link href="/">
                  <Box height="380px">
                    <Image
                      src={item.productVariantAsset?.preview ?? "https://images.unsplash.com/photo-1661006670127-b560e732ce28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"}
                      alt={item.productVariantName ?? "Standard Picture"}
                      h="full"
                      w="full"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </Box>
                  <HStack justify="space-between" align="center" py="2" fontSize="sm">
                    <Heading as="h3" fontSize="sm">{item.productVariantName}</Heading>
                    <Text>{toBusinessNumber(+item.priceWithTax.value)} €</Text>
                  </HStack>
                </Link>
              </Box>
            )
          })}
        </SimpleGrid>
      </Box>
    </Box >
  )
}

export default Home