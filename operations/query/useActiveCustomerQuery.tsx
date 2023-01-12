import { useEffect, useState } from "react"

interface IActiveCustomerData {
  data?: {
    activeCustomer?: {
      title: string
      firstName: string
      lastName: string
      customFields: {
        salutation: string
      }
    }
  }
}

export function useActiveCustomerQuery() {
  const [activeCustomerData, setActiveCustomerData] = useState<IActiveCustomerData>()
  const [refetched, setRefetched] = useState<boolean>()

  function refetch() {
    setRefetched(!refetched)
  }

  useEffect(() => {
    fetch('http://localhost:3001/shop-api', {
      method: 'POST',
      credentials: "include",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query ActiveCustomer {
            activeCustomer {
              title
              firstName
              lastName
              customFields {
                salutation
              }
            }
          }
        `
      })
    }).then(res => res.json()).then(res => setActiveCustomerData(res))
  }, [refetched])

  return { activeCustomerData, refetch }
}