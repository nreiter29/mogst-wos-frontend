import { Box, Heading, HStack, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { BiArrowFromLeft, BiArrowFromTop } from 'react-icons/bi'
import FilterFoldedChecker from '../elements/FilterFoldedChecker'
import { formatFirstLetterToUppercase } from '../helper/formatFirstLetterToUppercase'
import { CustomLink } from '../utility/CustomLink'

const FilterFolded: React.FC<{
  setFacetNumber: (id: null | number[]) => void
  selectedFacets: number[]
  setSelectedFacets: (facetIdArray: number[]) => void
  name: string
  facetValues: {
    [key: string]: Array<{
      name: string
      id: string
    }>
  }
  isChecked: boolean | undefined
}> = ({ setSelectedFacets, selectedFacets, setFacetNumber, name, facetValues, isChecked }) => {
  const [unFolded, setUnfolded] = useState(false)

  return (
    <VStack align="inherit" w="175px">
      <CustomLink onClick={() => setUnfolded(!unFolded)} href="" _hover={{ textDecor: 'none' }} transition=".5s">
        <HStack py="2">
          {unFolded ? <BiArrowFromTop fontSize="21px"/> : <BiArrowFromLeft fontSize="21px"/>}
          <Heading as="h4" fontSize="lg">{formatFirstLetterToUppercase(name)}</Heading>
        </HStack>
      </CustomLink>
      <Box>
        {facetValues[name].map((facet, index) => {
          return (
            <FilterFoldedChecker
              isChecked={isChecked}
              key={index}
              unFolded={unFolded}
              index={index}
              item={facet}
              setFacetNumber={setFacetNumber}
              setSelectedFacets={setSelectedFacets}
              selectedFacets={selectedFacets}
              length={facetValues[name].length}
            />
          )
        })}
      </Box>
    </VStack>
  )
}

export default FilterFolded
