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
      quantity: number
      id: number
      productVariant: {
        id: number
        price: number
        priceWithTax: number
        name: string
        sku: string
        assets: Array<{
          name: string
          source: string
        }>
        product: {
          name: string
          slug: string
        }
      }
      linePrice: number
      linePriceWithTax: number
      lineTax: number
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
        id
        price
        priceWithTax
        name
        sku
        assets {
          name
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
