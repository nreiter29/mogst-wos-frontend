import { useEffect, useState } from "react"

interface IProductData {
  data: {
    search: {
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

export function useFetchData() {
  const [facetId, setFacetId] = useState<null | number[]>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<IProductData>()
  const [refetched, setRefetched] = useState(false)

  const refetch = () => {
    setRefetched(!refetched)
  }

  useEffect(() => {
    refetch()
  }, [facetId])

  useEffect(() => {
    if (facetId == null) {
      fetch('http://localhost:3001/shop-api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `query Search {
          search(input: { inStock: true, take: 88, sort: { name: ASC }}) {
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
        setData(res)
        setIsLoading(false)
      })
    } else {
      fetch('http://localhost:3001/shop-api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `query Search {
        search(input: { inStock: true, take: 88, sort: { name: ASC }, facetValueIds: [${facetId}]}) {
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
        setData(res)
        setIsLoading(false)
      })
    }
  }, [refetched])

  return { data, isLoading, setFacetId, facetId }
}