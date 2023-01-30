import { useEffect, useState } from "react"

export interface IProductsSlug {
  name: string
  description: string
  variants: Array<{
    sku: string
    name: string
    stockLevel: string
    priceWithTax: number
    assets: Array<{
      name: string
      source: string
    }>
  }>
}

export function useProductQuery(slug: string) {
  const [refetchBoolean, setRefetchBoolean] = useState<boolean>()
  const [products, setProducts] = useState<IProductsSlug>()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  function refetch() {
    setRefetchBoolean(!refetchBoolean)
  }

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_BACKEND_URL ?? "", {
      method: 'POST',
      credentials: "include",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query Product {
          product(slug: "${slug}") {
            description
            name
            variants {
              sku
              name
              stockLevel
              priceWithTax
              assets {
                name
                source
              }
            }
          }
        }
`
      })
    }).then(res => res.json()).then(res => (setProducts(res.data.product), setIsLoading(false))).catch(err => console.log(err))
  }, [refetchBoolean])

  return { products, refetch, isLoading }
}