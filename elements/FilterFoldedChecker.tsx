import { Box, Checkbox, Heading, HStack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { formatFirstLetterToUppercase } from '../helper/formatFirstLetterToUppercase'

const FilterFoldedChecker: React.FC<{
  item: {
    name: string
    id: string
  }
  setFacetNumber: (id: null | number[]) => void
  length: number
  selectedFacets: number[]
  setSelectedFacets: (facetIdArray: number[]) => void
  unFolded: boolean
  index: number
  isChecked: boolean | undefined
}> = ({ item, setFacetNumber, length, selectedFacets, setSelectedFacets, unFolded, index, isChecked: reset }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const [click, setClick] = useState<boolean>(false)

  useEffect(() => {
    if (!reset) {
      setClick(false)
    }
  }, [reset])

  useEffect(() => {
    if (isChecked) {
      setSelectedFacets(selectedFacets.concat(Number(item.id)))
      setFacetNumber(selectedFacets.concat(Number(item.id)))
    } else {
      if (selectedFacets.length !== 0) {
        const idx = selectedFacets.indexOf(Number(item.id))
        selectedFacets.splice(idx, 1)
        setFacetNumber(selectedFacets)
      }
    }
  }, [isChecked])

  return (
    <Box display={unFolded ? 'normal' : 'none'}>
      <HStack align="inherit" justify="space-between" fontSize="sm" pb={(index + 1) == length ? '10px' : ''}>
        <Heading as="h5" fontSize="sm">{formatFirstLetterToUppercase(item.name)}</Heading>
        <Checkbox
          onChange={() => {
            setClick(!click)
            setIsChecked(!isChecked)
          }}
          isChecked={!!click}
        />
      </HStack>
    </Box>
  )
}

export default FilterFoldedChecker
