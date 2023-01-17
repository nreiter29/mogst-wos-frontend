import { useRouter } from "next/router"
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Container, Flex, Heading, Image, Select, SimpleGrid, Skeleton, Text, VStack } from "@chakra-ui/react"
import { NextPage } from "next"
import { IProductsSlug, useProductQuery } from "../../operations/query/useProductQuery"
import { useEffect, useState } from "react"
import NextImage from "next/image"
import { FormattedNumber } from "react-intl"
import { CustomLink } from "../../utility/CustomLink"

interface IProduct {
  sku: string
  name: string
  stockLevel: string
  priceWithTax: number
  assets?: Array<{
    name?: string
    source?: string
  }>
}

function searchProduct(products: IProductsSlug, sku: string, setProduct: (v: IProduct) => void) {
  products?.variants.map(v => {
    if (v.sku == sku) {
      setProduct(v)
    }
  })
}

function checkSku(products: IProductsSlug, selectedValue: string, setSku: (v: string) => void) {
  products?.variants.map(v => {
    if (v.name == selectedValue) {
      setSku(v.sku)
    }
  })
}

const ProductPage = () => {
  const router = useRouter()
  const query = router.query
  const { products, refetch, isLoading } = useProductQuery(String(query.slug))
  const [product, setProduct] = useState<IProduct>()
  const [selectedValue, setSelectedValue] = useState<string>()
  const [sku, setSku] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (products && selectedValue) {
      checkSku(products, selectedValue, setSku)
      if (sku) {
        router.push(`/product/${String(query.slug)}?sku=${String(sku)}`)
        searchProduct(products, String(query.sku), setProduct)
      }
    }
    refetch()
  }, [selectedValue, sku])

  useEffect(() => {
    if (!isLoading && products) {
      searchProduct(products, String(query.sku), setProduct)
    }
    refetch()
  }, [isLoading, products])

  return (
    <Container maxW="container.xl" h="95vh" display="flex" alignItems="center">
      <Card w="100%" bgColor="primaryBackground.500">
        <CardHeader w="fit-content">
          <Skeleton isLoaded={!isLoading} h="36px" w="180px">
            <Heading fontSize="4xl" whiteSpace="nowrap" color="primaryText.500">
              {products?.name}
            </Heading>
          </Skeleton>
        </CardHeader>
        <CardBody display="flex" alignContent="center" justifyContent="space-between">
          <SimpleGrid columns={2} spacing="2" alignContent="space-between" w="full">
            <VStack align="left" w="full">
              <Skeleton isLoaded={!isLoading} rounded="xl">
                <Image
                  rounded="xl"
                  src={product && product.assets && product.assets.length > 0 ? product.assets[0].source : "https://images.unsplash.com/photo-1661006670127-b560e732ce28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"}
                  alt={product && product.assets && product.assets.length > 0 ? product.assets[0].name : "Standard Picture"}
                  objectFit="cover"
                  objectPosition="center"
                  width="515px"
                  height="515px"
                />
              </Skeleton>
            </VStack>
            <VStack w="full" align="left" spacing="0">
              <Skeleton isLoaded={!isLoading} h="30px" w="full" mb="10px">
                <Flex align="center" justify="space-between" w="full" mb="10px">
                  <Heading fontSize="xl" color="primaryText.500">{products?.name}</Heading>
                  {product?.priceWithTax && (
                    <Text fontSize="xl" color="primaryText.500">
                      <FormattedNumber
                        value={+product?.priceWithTax / 100}
                        style="currency"
                        currency="EUR"
                        minimumFractionDigits={2}
                        maximumFractionDigits={2} />
                    </Text>
                  )}
                </Flex>
              </Skeleton>
              <Box>
                {products?.variants && products?.variants.length > 1 && (
                  <Select placeholder="Select an option" color="primaryText.500" marginBottom="10px" value={product?.name} onChange={v => setSelectedValue(v.target.value)}>
                    {products?.variants.map((v, index) => {
                      return (
                        <option key={v && index}>{v.name}</option>
                      )
                    })}
                  </Select>
                )}
              </Box>
              <Button as="div" bgColor="primaryButtonColor.500" color="primaryText.600" _hover={{ bgColor: "primaryButtonColor.300" }} w="full" mb="25px">Add to shopping cart</Button>
              <Heading as="h3" fontSize="lg" pt="25px" color="primaryText.500">Description</Heading>
              <Text color="primaryText.500">{products?.description}</Text>
            </VStack>
          </SimpleGrid>
        </CardBody>
        <CardFooter>
          <Skeleton isLoaded={!isLoading} w="130px" h="40px" rounded="lg">
            <CustomLink href="/" _hover={{ textDecor: "none" }}>
              <Button bgColor="backHome.500" _hover={{ bgColor: "backHome.600" }} as="div">Back to home</Button>
            </CustomLink>
          </Skeleton>
        </CardFooter>
      </Card >
    </Container >
  )
}

export default ProductPage