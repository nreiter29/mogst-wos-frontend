import { Box, Button, Flex, Grid, Heading, HStack, Image, SimpleGrid, Text, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { SearchBar } from "../compounds/SearchBar";
import toBusinessNumber from "../helper/toBusinessNumber";
import { useDebounce } from "../helper/useDebounce";
import fetchData from "../operations/fetcher"
import useSearchQuery from "../operations/search";

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

  type SearchQuery = {
    __typename?: "Query" | undefined;
    search: {
      __typename?: 'SearchResponse';
      items: Array<{
        __typename?: 'SearchResult';
        id: string;
        sku: string;
        slug: string;
        productId: string;
        productName: string;
        productVariantId: string;
        productVariantName: string;
        description: string;
      }>;
    };
  }

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

  return (
    <Box>
      <Flex w={{ base: "85%", lg: "40%" }} mx="auto" mt="8" px={{ base: "4", lg: "0" }}>
        <SearchBar></SearchBar>
      </Flex>
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