import { useToast } from '@chakra-ui/react'
import { gql, GraphQLClient } from 'graphql-request'

export function useAdjustOrderLineMutation (refetchActiveOrderCartData: () => void) {
  const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_BACKEND_URL ?? '', { credentials: 'include' })
  const toast = useToast()

  const updateCart = (orderLineId: number, quantity: number) => {
    graphQLClient.request(gql`
    mutation AdjustOrderLine {
      adjustOrderLine(orderLineId: ${orderLineId}, quantity: ${quantity}) {
        ... on Order {
          id
        }
        ... on ErrorResult {
          errorCode
          message
        }
      }
    }
    `).then(() => refetchActiveOrderCartData())
      .catch(err => {
        toast({
          title: 'Failure',
          description: 'An unexpected error occurred, please try again later',
          status: 'error',
          duration: 5000,
          isClosable: true,
        }); console.log(err)
      })
  }

  return { updateCart }
}
