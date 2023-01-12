export function formatFacetValues(facetValues: Array<{
  facetValue: {
    name: string
    id: string
    facet: {
      name: string
      id: string
    }
  }
}>) {
  const formattedValues: { [key: string]: Array<{ name: string, id: string }> } = {}
  facetValues.forEach(facetValue => {
    if (formattedValues[facetValue.facetValue.facet.name]) {
      formattedValues[facetValue.facetValue.facet.name].push({
        name: facetValue.facetValue.name, id: facetValue.facetValue.id,
      })
    } else {
      formattedValues[facetValue.facetValue.facet.name] = [{ name: facetValue.facetValue.name, id: facetValue.facetValue.id }]
    }
  })

  return formattedValues
}