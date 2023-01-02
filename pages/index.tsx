import { Box, Button, Grid, Heading, HStack, Image, SimpleGrid, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import fetchData from "../operations/fetcher"

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

  return (
    <Box backgroundColor="white">
      <Box mx="auto" maxW={{ base: "2xl", lg: "7xl" }} py={{ base: "16", sm: "24" }} px={{ base: "4", sm: "6", lg: "8" }}>
        <Heading as="h2" p="4">Products</Heading>
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3, xl: 4 }}>
          {products?.data.products.items.map((product, index) => {
            console.log(product)
            return (
              <Box m="2">
                <Link key={`${product.assets[0].name}${index}`} href={""}>
                  <Box h="380px" w="100%">
                    <Image
                      src={product.assets[0].source}
                      alt={product.assets[0].name}
                      h="full"
                      w="full"
                      objectFit="cover"
                      objectPosition="center"
                      _groupHover={{ opacity: 0.75 }}
                    />
                  </Box>
                  <HStack justify="space-between" align="center" py="2" fontSize="sm">
                    <Heading as="h3" fontSize="sm" textColor="gray.700">{product.variants[0].name}</Heading>
                    <Text textColor="gray.900">{product.variants[0].priceWithTax} €</Text>
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