import { gql, GraphQLClient } from 'graphql-request'
import { useCallback, useState } from 'react'

export interface IActiveCustomerData {
  activeCustomer?: {
    title: string
    firstName: string
    lastName: string
    customFields: {
      salutation: string
    }
  } | null
}

export function useActiveCustomerQuery () {
  const [activeCustomerData, setActiveCustomerData] = useState<IActiveCustomerData | undefined>()

  const refetch = useCallback(() => {
    const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_BACKEND_URL ?? '', { credentials: 'include' })

    graphQLClient.request(gql`
      query ActiveCustomer {
        activeCustomer {
          title
          firstName
          lastName
          customFields {
            salutation
          }
        }
      }
    `).then(res => setActiveCustomerData(res)).catch(err => console.log(err))
  }, [])

  return { activeCustomerData, refetch }
}
