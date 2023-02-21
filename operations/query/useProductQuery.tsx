import request, { gql } from 'graphql-request'
import { useCallback, useEffect, useState } from 'react'

export interface IProductsSlug {
  name: string
  description: string
  variants: Array<{
    id: number
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

export function useProductQuery (slug: string) {
  const [products, setProducts] = useState<IProductsSlug>()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const refetch = useCallback(() => {
    const query = gql`
      query Product {
        product(slug: "${slug}") {
          description
          name
          variants {
            id
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

    request(process.env.NEXT_PUBLIC_BACKEND_URL ?? '', query, { credentials: 'include' })
      .then(res => { setProducts(res.product); setIsLoading(false) })
      .catch(err => console.log(err))
  }, [slug])

  useEffect(() => {
    refetch()
  }, [refetch])

  return { products, refetch, isLoading }
}
