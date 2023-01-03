import { Box, Button, Flex, Grid, Heading, HStack, Image, SimpleGrid, Square, Stack, StackDivider, Text, useDisclosure, useOutsideClick, useTheme } from "@chakra-ui/react";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { SearchBar } from "../compounds/SearchBar";
import { formatHeadlineColor } from "../helper/formatHeadlineColor";
import toBusinessNumber from "../helper/toBusinessNumber";
import { useDebounce } from "../helper/useDebounce";
import fetchData from "../operations/fetcher"
import { SearchQuery, useSearchQuery } from "../helper/generated";
import { NextLink } from "../utility/NextLink";

const Home = () => {
  const [products, setProducts] = useState<{
    data: {
      products: {
        items: Array<{
          variants: Array<{
            name: string,
            priceWithTax: number,
          }>,
          assets: Array<{
            source: string,
            name: string,
          }>
        }>
      }
    }
  }>()

  const fetchProducts = async () => {
    setProducts(await fetchData())
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const theme = useTheme()

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

  const searchLogic = (
    <>
      <SearchBar
        // here we check the status of the query since when the query is idle the default for isLoading is true for some reason
        // https://github.com/TanStack/query/issues/3584
        isLoading={fetchStatus === 'idle' ? false : isLoading}
        borderBottomRadius={(!closeSearchResults && searchResults) ? 0 : 10}
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
          {searchResults.search.items.map(item => (
            <Box
              key={item.id}
              color="secondaryText.900"
              _hover={{ bg: 'secondaryBackground.550' }}
              p="10px"
              transition="0.25s"
            >
              <NextLink href={`/product/${item.slug}?sku=${item.sku}`} onClick={() => setSearchInput('')}>
                <Stack spacing="0">
                  <Text fontWeight="bold" _hover={{ color: 'accent.500' }} transition="0.25s">
                    {formatHeadlineColor(item.productName)}
                  </Text>
                  <Text color="secondaryText.200">
                    Artikelnummer
                  </Text>
                </Stack>
              </NextLink>
            </Box>
          ))}
        </Stack>
      )}
      {(!closeSearchResults && searchResults && searchResults.search.items.length === 0) && (
        <Box
          border="1px"
          borderTop="none"
          borderColor="gray.300"
          bg="white"
          position="absolute"
          w="inherit"
          padding="15px"
        >
          <Text color="white">
            Keine Ergebnisse gefunden
          </Text>
        </Box>
      )}
    </>
  )

  return (
    <Box>
      <Stack spacing={0} backgroundColor="red">
        <HStack
          spacing={{ base: 0, xl: 8 }}
          display={{ base: 'none', xl: 'inherit' }}
        >
          <Box w={{ lg: '200px', xl: '350px' }} backgroundColor="green">
            {searchLogic}
          </Box>
        </HStack>
        {searchBar.isOpen && (
          <Box
            // position="absolute"
            // left={0}
            // top={0}
            w="100%"
            h="max-content"
            // p={5}
            display={{ base: 'inherit', lg: 'none' }}
          >
            <Box pos="relative" w="100%" backgroundColor="yellow">
              {searchLogic}
            </Box>
          </Box>
        )}
      </Stack>
      <Box mx="auto" maxW={{ base: "2xl", lg: "7xl" }} py={{ base: "6", sm: "0" }} px={{ base: "4", sm: "6", lg: "8" }}>
        <Heading as="h2" p="2">Products</Heading>
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3, xl: 4 }}>
          {products?.data.products.items.map((product) => {
            return (
              <Box m="2" _hover={{ opacity: 0.75 }} transition="1s">
                <Link key={`${product.assets[0].name}`} href={""}>
                  <Box height="380px">
                    <Image
                      src={product.assets[0].source}
                      alt={product.assets[0].name}
                      h="full"
                      w="full"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </Box>
                  <HStack justify="space-between" align="center" py="2" fontSize="sm">
                    <Heading as="h3" fontSize="sm">{product.variants[0].name}</Heading>
                    <Text>{toBusinessNumber(product.variants[0].priceWithTax)} €</Text>
                  </HStack>
                </Link>
              </Box>
            )
          })}
        </SimpleGrid>
      </Box >
    </Box >
  )
}

export default Home