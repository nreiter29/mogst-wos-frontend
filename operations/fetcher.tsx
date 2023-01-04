import { useEffect, useState } from "react"

export interface IProductData {
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
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: `query Search {
        search(input: { inStock: true }) {
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
    }).catch(err => {
      console.log(err)
    }
    )
  }, [])

  return { isLoading, data }
}

export default useFetchData