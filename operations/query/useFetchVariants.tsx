import { useEffect, useState } from "react"

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

export function useFetchVariants() {

  const [facetNumber, setFacetNumber] = useState<null | number[]>(null)
  const [areVariantsLoading, setAreVariantsLoading] = useState(true)
  const [variants, setVariants] = useState<IVariantsData>()
  const [refetched, setRefetched] = useState(false)
  const [pageNumber, setPageNumber] = useState<number>(0)
  const [err, setErr] = useState<any | undefined>(8)

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
      fetch(process.env.NEXT_PUBLIC_BACKEND_URL ?? "", {
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
        setVariants(res.data)
        setAreVariantsLoading(false)
      }).catch(err => setErr(err))
    } else {
      fetch(process.env.NEXT_PUBLIC_BACKEND_URL ?? "", {
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
        setVariants(res.data)
        setAreVariantsLoading(false)
      }).catch(err => setErr(err))
    }
  }, [refetched])

  return { variants, areVariantsLoading, setFacetNumber, pageNumber, setPageNumber, err }
}