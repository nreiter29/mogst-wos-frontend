import request, { gql } from 'graphql-request'
import { useCallback, useEffect, useState } from 'react'

export interface IVariantsData {
  search: {
    totalItems: number
    items: Array<{
      sku: string
      slug: string
      productId: string
      productName: string
      productVariantId: string
      productVariantName: string
      description: string
      priceWithTax: {
        value: number
      }
      productVariantAsset: {
        preview: string
      }
    }>
    facetValues: Array<{
      facetValue: {
        name: string
        id: string
        facet: {
          name: string
          id: string
        }
      }
    }>
  }
}

export function useFetchVariants () {
  const [facetNumber, setFacetNumber] = useState<null | number[]>(null)
  const [areVariantsLoading, setAreVariantsLoading] = useState(true)
  const [variants, setVariants] = useState<IVariantsData>()
  const [pageNumber, setPageNumber] = useState<number>(0)
  const [err, setErr] = useState<unknown | undefined>(8)

  useEffect(() => {
    setPageNumber(0)
  }, [facetNumber])

  const refetch = useCallback(() => {
    const firstQuery = gql`
  query Search {
    search(input: { inStock: true, take: 6, sort: { name: ASC }, skip: ${pageNumber * 6}}) {
      totalItems
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
      facetValues {
        facetValue {
          name
          id
          facet {
            name
            id
          }
        }
      }
    }
  }
  `

    const secondQuery = gql`
  query Search {
    search(input: { inStock: true, take: 6, sort: { name: ASC }, facetValueIds: [${facetNumber}], skip: ${pageNumber * 6}}) {
      totalItems
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
      facetValues {
        facetValue {
          name
          id
          facet {
            name
            id
          }
        }
      }
    }
  }
  `

    if (facetNumber === null) {
      request(process.env.NEXT_PUBLIC_BACKEND_URL ?? '', firstQuery, { credentials: 'include' })
        .then(res => {
          setVariants(res)
          setAreVariantsLoading(false)
        }).catch(err => setErr(err))
    } else if (Array.isArray(facetNumber)) {
      request(process.env.NEXT_PUBLIC_BACKEND_URL ?? '', secondQuery, { credentials: 'include' })
        .then(res => {
          setVariants(res)
          setAreVariantsLoading(false)
        }).catch(err => setErr(err))
    }
  }, [facetNumber, pageNumber])

  useEffect(() => {
    refetch()
  }, [refetch])

  return { variants, areVariantsLoading, setFacetNumber, pageNumber, setPageNumber, err }
}
