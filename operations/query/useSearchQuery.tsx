import { useCallback, useEffect, useState } from "react"

export interface ISearchQuery {
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
        }
    }
}

export function useSearchQuery(input: string) {

    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState<ISearchQuery | undefined>()
    const [refetched, setRefetched] = useState(false)

    const refetch = useCallback(() => {
        setRefetched(!refetched)
    }, [refetched])

    useEffect(() => {
        fetch('http://localhost:3001/shop-api', {
            method: 'POST',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: `query Search {
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
            })
        }).then(res => res.json()).then(res => {
            setData(res)
            setIsLoading(false)
        }).catch(err => console.log(err))
    }, [refetched, input])

    return { data, isLoading, refetch }
}