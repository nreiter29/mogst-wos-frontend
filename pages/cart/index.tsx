import { Button, Card, CardBody, CardFooter, CardHeader, Container, Divider, Heading, HStack, IconButton, Image, Input, Skeleton, Stack, Text, VStack } from '@chakra-ui/react'
import NextImage from 'next/legacy/image'
import type React from 'react'
import { useEffect, useState } from 'react'
import { BiTrash } from 'react-icons/bi'
import { BsPlus } from 'react-icons/bs'
import { HiMinusSm } from 'react-icons/hi'
import { FormattedNumber } from 'react-intl'
import { useAdjustOrderLineMutation } from '../../operations/mutation/useAdjustOrderLineMutation'
import { useRemoveItemFromOrder } from '../../operations/mutation/useRemoveItemFromOrder'
import type { IActiveOrderCartVariants } from '../../operations/query/useActiveOrderCart'
import { CustomLink } from '../../utility/CustomLink'

const Cart: React.FC<{
  refetchActiveOrderCartData: () => void
  activeOrderCartData: IActiveOrderCartVariants | undefined
  addItem: (productVariantId: number, quantity: number, productName?: string) => void
  loginSuccesfully: boolean
}> = ({ refetchActiveOrderCartData, activeOrderCartData, addItem, loginSuccesfully }) => {
  const { updateCart } = useAdjustOrderLineMutation(refetchActiveOrderCartData)
  const { removeLine } = useRemoveItemFromOrder(refetchActiveOrderCartData)
  const [dogObject, setDogObject] = useState<{
    status: string
    message: string
  }>()

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(res => { setDogObject(res) })
      .catch(err => { console.log(err) })
  }, [])

  return (
    <Container
      maxW="container.xl"
      h="95vh"
      display="flex"
      alignItems="center"
    >
      <Card w="100%" bgColor="primaryBackground.500">
        {loginSuccesfully
          ? (
            <>
              <CardHeader>
                <Heading pl="4" as="h2" fontSize="4xl">Your Cart</Heading>
              </CardHeader>
              <CardBody>
                {activeOrderCartData?.activeOrder?.lines.length === 0
                  ? (
                    <Text pl="4" fontSize="lg" fontWeight={600}>You have nothing in the cart</Text>
                    )
                  : (
                    <Stack>
                      <HStack
                        px="4"
                        justify="space-between"
                        fontSize="lg"
                        fontWeight={600}
                      >
                        <Text w="325px">Variant info</Text>
                        <Text w="100px" textAlign="right">Single price</Text>
                        <Text w="135px">Quantity</Text>
                        <Text w="100px" textAlign="right">Total price</Text>
                        <Text w="50px" textAlign="right">Action</Text>
                      </HStack>
                      <Divider color="primaryText.200"/>
                      {activeOrderCartData?.activeOrder?.lines.map((v, lineId) => {
                        return (
                          <HStack
                            key={lineId}
                            py="1"
                            px="4"
                            spacing="0"
                            align="center"
                            justify="space-between"
                          >
                            <HStack w="325px" justify="flex-start" whiteSpace="nowrap">
                              <Image
                                src={v.productVariant.assets && v.productVariant.assets.length > 0 ? v.productVariant.assets[0].source : '/macbook.png'}
                                alt={v.productVariant.assets && v.productVariant.assets.length > 0 ? v.productVariant.assets[0].name : 'Standard Picture'}
                                width={100}
                                height={100}
                                objectFit="contain"
                              />
                              <VStack align="left" spacing="0">
                                <Heading as="h2" fontSize="xl">{v.productVariant.name}</Heading>
                                <Text fontSize="sm">SKU: {v.productVariant.sku}</Text>
                              </VStack>
                            </HStack>
                            <HStack fontWeight={700} w="100px" justify="right">
                              <FormattedNumber
                                value={+v.productVariant.priceWithTax / 100}
                                style="currency"
                                currency="EUR"
                                minimumFractionDigits={2}
                                maximumFractionDigits={2}
                              />
                            </HStack>
                            <HStack spacing="0" w="135px">
                              <IconButton
                                bgColor="secondaryButton.400"
                                color="secondaryText.500"
                                icon={<HiMinusSm size="40px"/>}
                                aria-label=""
                                roundedRight="none"
                                onClick={() => updateCart(v.id, (v.quantity - 1))}
                              />
                              <Input
                                color="primaryText.500"
                                textAlign="center"
                                rounded="none"
                                borderX="none"
                                borderColor="secondaryButton.200"
                                value={v.quantity}
                                readOnly
                              />
                              <IconButton
                                color="secondaryText.500"
                                bgColor="secondaryButton.400"
                                icon={<BsPlus size="40px"/>}
                                aria-label=""
                                roundedLeft="none"
                                isDisabled={v.quantity === 20}
                                onClick={() => { addItem(v.productVariant.id, 1, v.productVariant.name) }}
                              />
                            </HStack>
                            <HStack fontWeight={700} w="100px" justify="right">
                              <FormattedNumber
                                value={+v.linePriceWithTax / 100}
                                style="currency"
                                currency="EUR"
                                minimumFractionDigits={2}
                                maximumFractionDigits={2}
                              />
                            </HStack>
                            <HStack w="50px" justify="right">
                              <IconButton
                                color="primaryText.500"
                                bgColor="inherit"
                                _hover={{ bgColor: 'none' }}
                                _active={{ bgColor: 'none' }}
                                icon={<BiTrash size="40px"/>}
                                aria-label=""
                                roundedLeft="none"
                                onClick={() => removeLine(v.id)}
                              />
                            </HStack>
                          </HStack>
                        )
                      })}
                      <Divider color="primaryText.200"/>
                      <HStack>
                        ets
                      </HStack>
                    </Stack>
                    )}
              </CardBody>
              <CardFooter>

              </CardFooter>
            </>
            )
          : (
            <>
              <CardHeader>
                <Heading pl="4" as="h2" fontSize="4xl">You must be logged in to view your cart.</Heading>
              </CardHeader>
              <CardBody>
                <Stack>
                  {dogObject === undefined && (
                    <Skeleton
                      mx="auto"
                      w={500}
                      h={500}
                    />
                  )}
                  {dogObject?.message && (
                    <NextImage
                      src={dogObject.message}
                      alt="dog"
                      width={500}
                      height={500}
                      layout="intrinsic"
                      objectFit="contain"
                    />
                  )}
                </Stack>
              </CardBody>
              <CardFooter>
                <HStack align="center">
                  <CustomLink href="/" _hover={{ textDecor: 'none' }}>
                    <Button
                      bgColor="backHome.500"
                      _hover={{ bgColor: 'backHome.600' }}
                      color="secondaryText.500"
                      as="div"
                    >Back to home
                    </Button>
                  </CustomLink>
                  <Text>or</Text>
                  <CustomLink href="/auth/login" _hover={{ textDecor: 'none' }}>
                    <Button
                      bgColor="primaryButtonColor.500"
                      color="secondaryText.500"
                      _hover={{ bgColor: 'primaryButtonColor.300' }}
                      as="div"
                    >Go to login
                    </Button>
                  </CustomLink>
                </HStack>
              </CardFooter>
            </>
            )}
      </Card>
    </Container>
  )
}

export default Cart
