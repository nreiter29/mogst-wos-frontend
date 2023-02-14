import { Box, Button, Card, CardBody, CardFooter, CardHeader, Container, Flex, Heading, HStack, IconButton, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Select, SimpleGrid, Skeleton, Text, useDisclosure, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import { HiMinusSm } from 'react-icons/hi'
import { FormattedNumber } from 'react-intl'
import type { IActiveCustomerData } from '../../operations/query/useActiveCustomerQuery'
import type { IActiveOrderCartVariants } from '../../operations/query/useActiveOrderCart'
import type { IProductsSlug } from '../../operations/query/useProductQuery'
import { useProductQuery } from '../../operations/query/useProductQuery'
import { CustomLink } from '../../utility/CustomLink'

interface IProduct {
  id: number
  sku: string
  name: string
  stockLevel: string
  priceWithTax: number
  assets?: Array<{
    name?: string
    source?: string
  }>
}

function searchProduct (products: IProductsSlug, sku: string, setProduct: (v: IProduct) => void) {
  products.variants.map(v => {
    if (v.sku === sku) {
      setProduct(v)
    }
  })
}

function checkSku (products: IProductsSlug, selectedValue: string, setSku: (v: string) => void) {
  products.variants.map(v => {
    if (v.name === selectedValue) {
      setSku(v.sku)
    }
  })
}

const ProductPage: React.FC<{
  activeCustomerData?: IActiveCustomerData
  refetch: () => void
  refetchActiveOrderCartData: () => void
  addItem: (productVariantId: number, quantity: number, productName?: string) => void
  activeOrderCartData: IActiveOrderCartVariants | undefined
}> = ({
  activeCustomerData,
  refetch: refetchActiveCustomerData,
  refetchActiveOrderCartData,
  addItem,
  activeOrderCartData,
}) => {
  const router = useRouter()
  const query = router.query
  const { products, refetch, isLoading } = useProductQuery(String(query.slug))
  const [product, setProduct] = useState<IProduct>()
  const [selectedValue, setSelectedValue] = useState<string>()
  const [sku, setSku] = useState<string | undefined>(undefined)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [quantity, setQuantity] = useState<number>(1)
  const [isButtonEnabled, setIsButtonEnabled] = useState<boolean>(false)
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false)

  useEffect(() => {
    refetch()
    refetchActiveCustomerData()
  }, [query.sku, refetch])

  useMemo(() => {
    if (products && selectedValue) {
      checkSku(products, selectedValue, setSku)
      if (sku) {
        router.push(`/product/${String(query.slug)}?sku=${String(sku)}`)
        searchProduct(products, String(query.sku), setProduct)
      }
    }
  }, [products, query.sku, query.slug, router, selectedValue, sku])

  useMemo(() => {
    if (!isLoading && products) {
      searchProduct(products, String(query.sku), setProduct)
    }
  }, [isLoading, products, query.sku])

  useEffect(() => {
    if (activeOrderCartData?.activeOrder?.lines.find(e => e.productVariant.id === product?.id)) {
      if ((Number(activeOrderCartData.activeOrder.lines.find(e => e.productVariant.id === product?.id)?.quantity) + quantity) >= 20) {
        if (((Number(activeOrderCartData.activeOrder.lines.find(e => e.productVariant.id === product?.id)?.quantity) + quantity) >= 21) || (Number(activeOrderCartData.activeOrder.lines.find(e => e.productVariant.id === product?.id)?.quantity) === 20)) {
          setIsButtonEnabled(false)
          setIsButtonDisabled(true)
        } else if ((Number(activeOrderCartData.activeOrder.lines.find(e => e.productVariant.id === product?.id)?.quantity) + quantity) >= 20) {
          setIsButtonDisabled(true)
        } else if (Number(activeOrderCartData.activeOrder.lines.find(e => e.productVariant.id === product?.id)?.quantity) === 20) {
          setIsButtonEnabled(true)
        }
      }
    } else {
      if (query.sku === undefined && activeCustomerData?.activeCustomer === null) {
        setIsButtonDisabled(true)
        setIsButtonEnabled(true)
        if (quantity >= 20) {
          setIsButtonDisabled(true)
          setIsButtonEnabled(true)
        } else {
          setIsButtonDisabled(false)
          setIsButtonEnabled(true)
        }
      } else {
        if (quantity >= 20) {
          setIsButtonDisabled(true)
          setIsButtonEnabled(true)
        } else {
          setIsButtonDisabled(false)
          setIsButtonEnabled(true)
        }
      }
    }
  }, [activeCustomerData?.activeCustomer, activeOrderCartData?.activeOrder?.lines, product?.id, quantity, query.sku])

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
              <Skeleton
                isLoaded={!isLoading}
                rounded="xl"
                width="515px"
                height="515px"
              >
                <Image
                  onClick={onOpen}
                  _hover={{ cursor: 'pointer' }}
                  rounded="xl"
                  src={product?.assets && product.assets.length > 0 ? product.assets[0].source : '/macbook.png'}
                  alt={product?.assets && product.assets.length > 0 ? product.assets[0].name : 'Standard Picture'}
                  objectFit="contain"
                  objectPosition="center"
                  width="515px"
                  height="515px"
                />
              </Skeleton>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay>
                  <ModalCloseButton color="white" cursor="pointer"/>
                </ModalOverlay>
                <ModalContent
                  onClick={onClose}
                  bgColor="transparent"
                  w={{ base: '100%', lg: '1000px' }}
                  h={{ base: '700px', lg: '1000px' }}
                  alignSelf="center"
                  justifySelf="center"
                >
                  <ModalBody
                    bg="primaryBackground.500"
                    display="flex"
                    alignSelf="center"
                    justifySelf="center"
                    w={{ base: '100%', lg: '1000px' }}
                    h={{ base: '700px', lg: '1000px' }}
                    p="6"
                  >
                    <Image
                      src={product?.assets && product.assets.length > 0 ? product.assets[0].source : '/macbook.png'}
                      alt={product?.assets && product.assets.length > 0 ? product.assets[0].name : 'Standard Picture'}
                      objectFit="contain"
                      objectPosition="center"
                      width="100%"
                      h="100%"
                    />
                  </ModalBody>
                </ModalContent>
              </Modal>
            </VStack>
            <VStack w="full" align="left" spacing="0">
              <Skeleton isLoaded={!isLoading} h="30px" w="full" mb="10px">
                <Flex align="center" justify="space-between" w="full" mb="10px">
                  <Heading fontSize="2xl" color="primaryText.500">{products?.name}</Heading>
                  {product?.priceWithTax && (
                    <Text fontSize="xl" color="primaryText.500">
                      <FormattedNumber
                        value={+product.priceWithTax / 100}
                        style="currency"
                        currency="EUR"
                        minimumFractionDigits={2}
                        maximumFractionDigits={2}
                      />
                    </Text>
                  )}
                </Flex>
              </Skeleton>
              <Box>
                <Box mb="5px">
                  {products?.variants && products.variants.length ? '' : <><Skeleton isLoaded={!isLoading} h="22px" w="60px" mb="1"/><Skeleton isLoaded={!isLoading} w="100%" h="40px"/></>}
                  {products?.variants && products.variants.length > 1 && (
                    <>
                      <Heading as="h3" fontSize="lg" color="primaryText.500" mb="1">Variant</Heading>
                      <Select
                        placeholder="Select an option"
                        color="primaryText.500"
                        value={product?.name}
                        onChange={v => setSelectedValue(v.target.value)}
                      >
                        {products.variants.map((v, index) => {
                          return (
                            <option key={index}>{v.name}</option>
                          )
                        })}
                      </Select>
                    </>
                  )}
                </Box>
                <Box mb="10px">
                  <Skeleton isLoaded={!isLoading} h="22px" w="70px" mb="1">
                    <Heading as="h3" fontSize="lg" color="primaryText.500" mb="1">Quantity</Heading>
                  </Skeleton>
                  <Skeleton isLoaded={!isLoading} w="125px" h="40px">
                    <HStack spacing="0" w="135px">
                      <IconButton
                        bgColor="secondaryButton.400"
                        color="secondaryText.500"
                        icon={<HiMinusSm size="40px"/>}
                        onClick={() => setQuantity(quantity - 1)}
                        isDisabled={quantity === 1}
                        aria-label=""
                        roundedRight="none"
                      />
                      <Input
                        color="primaryText.500"
                        value={quantity}
                        textAlign="center"
                        rounded="none"
                        borderX="none"
                        borderColor="secondaryButton.200"
                        onChange={() => void 0}
                      />
                      <IconButton
                        color="secondaryText.500"
                        bgColor="secondaryButton.400"
                        icon={<BsPlus size="40px"/>}
                        onClick={() => setQuantity(quantity + 1)}
                        aria-label=""
                        isDisabled={isButtonDisabled}
                        roundedLeft="none"
                      />
                    </HStack>
                  </Skeleton>
                </Box>
              </Box>
              <Button
                bgColor="primaryButtonColor.500"
                color="secondaryText.500"
                _hover={{ bgColor: 'primaryButtonColor.300' }}
                w="full"
                isDisabled={!isButtonEnabled}
                onClick={() => { addItem(product?.id ?? 0, quantity, product?.name); setQuantity(1) }}
              >Add to shopping cart
              </Button>
              {activeCustomerData?.activeCustomer === null && <Heading as="h4" fontSize="md" color="red" pt="1">You must be logged in to add anything to the cart!</Heading>}
              <Skeleton isLoaded={!isLoading} w="100%" h="100px">
                <Heading
                  as="h3"
                  fontSize="lg"
                  mt="25px"
                  mb="1"
                  color="primaryText.500"
                >Description
                </Heading>
                <Text color="primaryText.500" lineHeight="18px">{products?.description}</Text>
              </Skeleton>
            </VStack>
          </SimpleGrid>
        </CardBody>
        <CardFooter>
          <Skeleton isLoaded={!isLoading} w="130px" h="40px" rounded="lg">
            <CustomLink href="/" _hover={{ textDecor: 'none' }}>
              <Button
                bgColor="backHome.500"
                _hover={{ bgColor: 'backHome.600' }}
                color="secondaryText.500"
                as="div"
              >Back to home
              </Button>
            </CustomLink>
          </Skeleton>
        </CardFooter>
      </Card >
    </Container >
  )
}

export default ProductPage
