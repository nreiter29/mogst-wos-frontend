import { gql, GraphQLClient } from 'graphql-request'
import { useCallback, useState } from 'react'

export interface IActiveOrderCartVariants {
  activeOrder: {
    subTotal: number
    shipping: number
    currencyCode: string
    subTotalWithTax: number
    totalQuantity: number
    lines: Array<{
      id: number
      productVariant: Array<{
        price: number
        name: string
        sku: string
        assets: Array<{
          source: string
        }>
        product: Array<{
          name: string
          slug: string
        }>
      }>
      unitPrice: number
      linePrice: number
      quantity: number
    }>
  } | null
}

export function useActiveOrderCart () {
  const [activeOrderCartData, setActiveOrderCartData] = useState<IActiveOrderCartVariants>()

  const refetchActiveOrderCartData = useCallback(() => {
    const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_BACKEND_URL ?? '', { credentials: 'include' })

    graphQLClient.request(gql`
     query ActiveOrderCart {
  activeOrder {
    subTotal
    shipping
    subTotalWithTax
    totalQuantity
    lines {
      id
      quantity
      productVariant {
        price
        name
        sku
        assets {
          source
        }
        product {
          name
          slug
        }
      }
      linePrice
      linePriceWithTax
      lineTax
    }
  }
}
    `).then(res => setActiveOrderCartData(res)).catch(err => console.log(err))
  }, [])

  return { activeOrderCartData, refetchActiveOrderCartData }
}
