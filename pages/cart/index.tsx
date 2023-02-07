import { Card, CardBody, CardFooter, CardHeader, Container, Heading } from '@chakra-ui/react'
import type { IActiveOrderCartVariants } from '../../operations/query/useActiveOrderCart'
import React, { useEffect } from 'react'

const Cart: React.FC<{
  refetchActiveOrderCartData: () => void
  activeOrderCartData: IActiveOrderCartVariants | undefined
}> = ({ refetchActiveOrderCartData, activeOrderCartData }) => {
  console.log(activeOrderCartData?.activeOrder)
  return (
    <Container
      maxW="container.xl"
      h="95vh"
      display="flex"
      alignItems="center"
    >
      <Card w="100%" bgColor="primaryBackground.500">
        <CardHeader>
          <Heading as="h2" fontSize="4xl">Your Cart</Heading>
        </CardHeader>
        <CardBody/>
        <CardFooter/>
      </Card>
    </Container>
  )
}

export default Cart
