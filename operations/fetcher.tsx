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
    }
  }
}

const useFetchData = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<IProductData | undefined>()

  useEffect(() => {
    fetch('http://localhost:3001/shop-api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query Search {
        search(input: { inStock: true, take: 88, sort: { name: ASC } }) {
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
  }, [])

  return { isLoading, data }
}

export default useFetchData