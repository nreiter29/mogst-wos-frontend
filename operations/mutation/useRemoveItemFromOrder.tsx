import { useToast } from '@chakra-ui/react'
import { gql, GraphQLClient } from 'graphql-request'

export function useRemoveItemFromOrder (refetchActiveOrderCartData: () => void) {
  const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_BACKEND_URL ?? '', { credentials: 'include' })
  const toast = useToast()

  const removeLine = (orderLineId: number) => {
    graphQLClient.request(gql`
    mutation RemoveItemFromOrder{
      removeOrderLine(orderLineId: ${orderLineId}) {
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

  return { removeLine }
}
