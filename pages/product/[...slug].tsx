import { useRouter } from "next/router"
import { Button, Card, CardBody, CardFooter, CardHeader, Container, Flex, Image, Skeleton, Text, VStack } from "@chakra-ui/react"
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

const ProductPage = () => {
  const router = useRouter()
  const query = router.query
  const { products, refetch, isLoading } = useProductQuery(String(query.slug))
  const [product, setProduct] = useState<IProduct>()

  useEffect(() => {
    if (!isLoading && products) {
      searchProduct(products, String(query.sku), setProduct)
    }
    refetch()
  }, [isLoading, products])

  return (
    <Container maxW="container.xl" h="100vh" display="flex" alignItems="center">
      <Card w="100%">
        <CardHeader fontSize="2xl" fontWeight="bold" w="fit-content">
          <Skeleton isLoaded={!isLoading} h="36px" w="180px">
            {products?.name}
          </Skeleton>
        </CardHeader>
        <CardBody display="flex" alignContent="center" justifyContent="space-between">
          <VStack align="left" w="400px">
            <Skeleton isLoaded={!isLoading} rounded="xl">
              <Image
                rounded="xl"
                src={product && product.assets && product.assets.length > 0 ? product.assets[0].source : "https://images.unsplash.com/photo-1661006670127-b560e732ce28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"}
                alt={product && product.assets && product.assets.length > 0 ? product.assets[0].name : "Standard Picture"}
                objectFit="cover"
                objectPosition="center"
                width="full"
                height="400px"
              />
            </Skeleton>
            <Skeleton isLoaded={!isLoading} h="30px">
              <Flex align="center" justify="space-between">
                <Text fontSize="xl" fontWeight="bold">{product?.name}</Text>
                {product?.priceWithTax && (
                  <Text fontSize="xl" fontWeight="bold">
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
          </VStack>
          <VStack>

          </VStack>
        </CardBody>
        <CardFooter>
          <Skeleton isLoaded={!isLoading} w="130px" h="40px" rounded="lg">
            <CustomLink href="/" _hover={{ textDecor: "none" }}>
              <Button colorScheme="red" as="div">Back to home</Button>
            </CustomLink>
          </Skeleton>
        </CardFooter>
      </Card>
    </Container>
  )
}

export default ProductPage