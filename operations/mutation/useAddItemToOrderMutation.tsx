import { useToast } from '@chakra-ui/react'
import { gql, GraphQLClient } from 'graphql-request'

export function useAddItemToOrderMutation () {
  const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_BACKEND_URL ?? '', { credentials: 'include' })
  const toast = useToast()

  const addItem = (productVariantId: number, quantity: number, productName?: string) => {
    graphQLClient.request(gql`
    mutation AddItemToOrder {
  addItemToOrder(productVariantId: ${productVariantId}, quantity: ${quantity}) {
    __typename
    ... on Order {
      id
      state
    }
    ... on OrderModificationError {
      errorCode
      message
      __typename
    }
    ... on OrderLimitError {
      message
      maxItems
      __typename
    }
    ... on NegativeQuantityError {
      errorCode
      message
      __typename
    }
    ... on InsufficientStockError {
      errorCode
      message
      quantityAvailable
      __typename
    }
  }
}
    `).then(() => toast({
      title: 'Success',
      description: `${quantity} x ${productName ?? ''} successfully added to the cart!`,
      status: 'success',
      duration: 5000,
      isClosable: true,
    })).catch(err => {
      toast({
        title: 'Failure',
        description: 'An unexpected error occurred, please try again later',
        status: 'error',
        duration: 5000,
        isClosable: true,
      }); console.log(err)
    })
  }

  return { addItem }
}
