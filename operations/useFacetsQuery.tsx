import { useEffect, useState } from "react"

export interface IFacets {
    data: {
        facets: {
            items: Array<{
                name: string
                values: Array<{
                    name: string
                }>
            }>
        }
    }
}

export function useFacetsQuery() {

    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState<IFacets>()
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
                query: `query Facets {
                    facets(options: { sort: { name: ASC } }) {
                      items {
                        name
                        values {
                          name
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
    }, [refetched])

    return { data, isLoading, refetch }
}