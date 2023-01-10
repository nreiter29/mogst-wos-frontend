import { Heading, HStack, VStack, Text, Box, Checkbox, Divider } from "@chakra-ui/react"
import { Dispatch, SetStateAction, useState } from "react"
import { BiArrowFromLeft, BiArrowFromTop } from "react-icons/bi"
import FilterFoldedChecker from "../elements/FilterFoldedChecker"
import { formatFirstLetterToUppercase } from "../helper/formatFirstLetterToUppercase"
import { CustomLink } from "../utility/CustomLink"

const FilterFolded: React.FC<{
    setFacetId: (id: null | number[]) => void,
    facetId: null | number[],
    selectedFacets: Array<number>,
    setSelectedFacets: (facetIdArray: Array<number>) => void,
    name: string,
    facetValues: {
        [key: string]: Array<{
            name: string;
            id: string;
        }>
    },
    isChecked: boolean | undefined
}> = ({ setFacetId, facetId, selectedFacets: facetIdArray, setSelectedFacets: setSelectedFacets, name, facetValues, isChecked }) => {
    const [unFolded, setUnfolded] = useState(false)

    return (
        <VStack align="inherit" w="175px">
            <CustomLink onClick={() => setUnfolded(!unFolded)} href="" _hover={{ textDecor: "none" }} transition=".5s">
                <HStack py="2">
                    {unFolded ? <BiArrowFromTop fontSize="21px" /> : <BiArrowFromLeft fontSize="21px" />}
                    <Heading as="h4" fontSize="lg">{formatFirstLetterToUppercase(name)}</Heading>
                </HStack>
            </CustomLink>
            <Box>
                {facetValues[name].map((facet, index) => {
                    return (
                        <FilterFoldedChecker isChecked={isChecked} key={facet && index} unFolded={unFolded} index={index} item={facet} setSelectedFacets={setSelectedFacets} setFacetId={setFacetId} selectedFacets={facetIdArray} length={facetValues[name].length} facetId={facetId}></FilterFoldedChecker>
                    )
                })}
            </Box>
        </VStack>
    )
}

export default FilterFolded