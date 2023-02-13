import { Text, Card, CardBody, CardFooter, CardHeader, Container, Heading, HStack, Stack, VStack, Box, Input, IconButton, Divider } from '@chakra-ui/react'
import type { IActiveOrderCartVariants } from '../../operations/query/useActiveOrderCart'
import React, { useEffect } from 'react'
import NextImage from 'next/legacy/image'
import { FormattedNumber } from 'react-intl'
import { BsPlus } from 'react-icons/bs'
import { HiMinusSm } from 'react-icons/hi'
import { BiTrash } from 'react-icons/bi'

const Cart: React.FC<{
  refetchActiveOrderCartData: () => void
  activeOrderCartData: IActiveOrderCartVariants | undefined
  addItem: (productVariantId: number, quantity: number, productName?: string) => void
}> = ({ refetchActiveOrderCartData, activeOrderCartData, addItem }) => {
  return (
    <Container
      maxW="container.xl"
      h="95vh"
      display="flex"
      alignItems="center"
    >
      <Card w="100%" bgColor="primaryBackground.500">
        <CardHeader>
          <Heading pl="4" as="h2" fontSize="4xl">Your Cart</Heading>
        </CardHeader>
        <CardBody>
          <Stack>
            <HStack
              px="4"
              justify="space-between"
              fontSize="lg"
              fontWeight={600}
            >
              <Text w="325px">Variant info</Text>
              <Text w="100px">Single price</Text>
              <Text w="135px">Quantity</Text>
              <Text w="100px">Total price</Text>
              <Text w="50px">Action</Text>
            </HStack>
            <Divider color="primaryText.200"/>
            {activeOrderCartData?.activeOrder?.lines.map((v, idx) => {
              return (
                <HStack
                  key={idx}
                  py="1"
                  px="4"
                  spacing="0"
                  align="center"
                  justify="space-between"
                >
                  <HStack w="325px" justify="space-between">
                    <NextImage
                      src={v.productVariant.assets[0].source}
                      alt={v.productVariant.assets[0].name}
                      width={100}
                      height={100}
                      layout="intrinsic"
                      objectFit="contain"
                    />
                    <VStack align="left" spacing="0">
                      <Heading as="h2" fontSize="xl">{v.productVariant.name}</Heading>
                      <Text fontSize="sm">SKU: {v.productVariant.sku}</Text>
                    </VStack>
                  </HStack>
                  <HStack fontWeight={700} w="100px">
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
                      isDisabled={v.quantity === 1}
                    />
                    <Input
                      color="primaryText.500"
                      textAlign="center"
                      rounded="none"
                      borderX="none"
                      borderColor="secondaryButton.200"
                      value={v.quantity}
                    />
                    <IconButton
                      color="secondaryText.500"
                      bgColor="secondaryButton.400"
                      icon={<BsPlus size="40px"/>}
                      aria-label=""
                      roundedLeft="none"
                      isDisabled={v.quantity === 20}
                      onClick={() => { addItem(v.productVariant.id, 1, v.productVariant.name); refetchActiveOrderCartData() }}
                    />
                  </HStack>
                  <HStack fontWeight={700} w="100px">
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
        </CardBody>
        <CardFooter/>
      </Card>
    </Container>
  )
}

export default Cart
