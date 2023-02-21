import request, { gql } from 'graphql-request'
import { useCallback, useEffect, useState } from 'react'

export interface ISearchQuery {
  search: {
    items: Array<{
      sku: string
      slug: string
      productId: string
      productName: string
      productVariantId: string
      productVariantName?: string
      description: string
      priceWithTax: {
        value: number
      }
      productVariantAsset?: {
        preview?: string
      }
    }>
  }
}

export function useSearchQuery (input: string) {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<ISearchQuery | undefined>()

  const refetch = useCallback((input: string) => {
    const query = gql`
  query Search {
    search(input: { inStock: true, term: "${input}", sort: { name: ASC } }) {
      items {
        sku
        slug
        productId
        productName
        productVariantId
        productVariantName
        description
        priceWithTax {
          ... on SinglePrice {
            value
          }
        }
        productVariantAsset {
          preview
        }
      }
    }
  }
  `
    request(process.env.NEXT_PUBLIC_BACKEND_URL ?? '', query, { credentials: 'include' })
      .then(res => {
        setData(res)
        setIsLoading(false)
      }).catch(err => console.log(err))
  }, [])

  useEffect(() => {
    refetch(input)
  }, [input, refetch])

  return { data, isLoading, refetch }
}
