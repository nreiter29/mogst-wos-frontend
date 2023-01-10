const useSearchQuery = async (input: string) => {
  return await fetch('http://localhost:3001/shop-api', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: `query Search ($input: ${input}, $prefixMode: Boolean = true) {
              search(input: { term: $input, prefixMode: $prefixMode }) {
                items {
                  id
                  sku
                  slug
                  productId
                  productName
                  productVariantId
                  productVariantName
                  description
                }
              }
            }
        `
    })
  }).then(async res => await res.json())
}

export default useSearchQuery