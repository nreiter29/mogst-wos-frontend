import { useEffect, useState } from "react"

interface IProductData {
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

  const [facetId, setFacetId] = useState<null | number[]>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [variants, setVariants] = useState<IProductData>()
  const [refetched, setRefetched] = useState(false)
  const [site, setSite] = useState<number>(0)

  const refetch = () => {
    setRefetched(!refetched)
  }

  useEffect(() => {
    refetch()
  }, [facetId, site])

  useEffect(() => {
    setSite(0)
  }, [facetId])

  useEffect(() => {
    if (facetId == null) {
      fetch('http://localhost:3001/shop-api', {
        method: 'POST',
        credentials: "include",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `query Search {
          search(input: { inStock: true, take: 6, sort: { name: ASC }, skip: ${site * 6}}) {
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
        search(input: { inStock: true, take: 6, sort: { name: ASC }, facetValueIds: [${facetId}], skip: ${site * 6}}) {
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

  return { variants, isLoading, setFacetId, facetId, site, setSite }
}