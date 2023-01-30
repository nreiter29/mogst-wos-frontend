import { useEffect, useState } from "react"

export interface IActiveCustomerData {
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
    fetch(process.env.NEXT_PUBLIC_BACKEND_URL ?? "", {
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
    }).then(res => res.json()).then(res => setActiveCustomerData(res)).catch(err => console.log(err))
  }, [refetched, activeCustomerData])

  return { activeCustomerData, refetch }
}