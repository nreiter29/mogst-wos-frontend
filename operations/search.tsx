const useSearchQuery = async (input: string => {
    return await fetch('http://localhost:3001/shop-api', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: `query SearchAdvanced($input: SearchInput!) {
                search(input: $input) {
                  totalItems
                  items {
                    id
                    sku
                    slug
                    productVariantName
                    description
                    facetValueIds
                    productVariantId
                    currencyCode
                    customMappings {
                      compound
                      iso
                    }
                  }
                  facetValues {
                    facetValue {
                      name
                      id
                      facet {
                        name
                      }
                    }
                    count
                  }
                }
              }
        `
        })
    }).then(async res => await res.json())
}

export default useSearchQuery