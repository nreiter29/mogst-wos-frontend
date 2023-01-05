import { useEffect, useState } from "react"

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

    const refetch = () => {
        setRefetched(!refetched)
    }

    useEffect(() => {
        fetch('http://localhost:3001/shop-api', {
            method: 'POST',
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
        })
    }, [refetched, input])

    return { data, isLoading, refetch }
}