const fetchData = async () => {
  return await fetch('http://localhost:3001/shop-api', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: `query Products {
        products {
          items {
            variants {
              name
              priceWithTax
            }
            assets {
              source
              name
            }
          }
        }
      }
      `
    })
  }).then(async res => await res.json())
}

export default fetchData