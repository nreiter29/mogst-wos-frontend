import { useEffect, useState } from "react"

interface IVariantsData {
  data: {
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
      }>,
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
}

export function useFetchVariants() {

  const [facetNumber, setFacetNumber] = useState<null | number[]>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [variants, setVariants] = useState<IVariantsData>()
  const [refetched, setRefetched] = useState(false)
  const [pageNumber, setPageNumber] = useState<number>(0)

  const refetch = () => {
    setRefetched(!refetched)
  }

  useEffect(() => {
    refetch()
  }, [facetNumber, pageNumber])

  useEffect(() => {
    setPageNumber(0)
  }, [facetNumber])

  useEffect(() => {
    if (facetNumber == null) {
      fetch('http://localhost:3001/shop-api', {
        method: 'POST',
        credentials: "include",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `query Search {
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
        })
      }).then(res => res.json()).then(res => {
        setVariants(res)
        setIsLoading(false)
      })
    } else {
      fetch('http://localhost:3001/shop-api', {
        method: 'POST',
        credentials: "include",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `query Search {
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
        })
      }).then(res => res.json()).then(res => {
        setVariants(res)
        setIsLoading(false)
      })
    }
  }, [refetched])

  return { variants, isLoading, setFacetNumber, pageNumber, setPageNumber }
}