import { Heading, HStack, VStack, Text, Box, Checkbox, Divider } from "@chakra-ui/react"
import { Dispatch, SetStateAction, useState } from "react"
import { BiArrowFromLeft, BiArrowFromTop } from "react-icons/bi"
import FilterFoldedChecker from "../elements/FilterFoldedChecker"
import { formatFirstLetterToUppercase } from "../helper/formatFirstLetterToUppercase"
import { CustomLink } from "../utility/CustomLink"

const FilterFolded: React.FC<{
    facet: {
        name: string;
        values: {
            name: string;
            id: string
        }[];
    },
    setFacetId: (id: null | number[]) => void,
    refetch: () => void,
    facetId: null | number[],
    selectedFacets: Array<number>,
    setSelectedFacets: (facetIdArray: Array<number>) => void,
}> = ({ facet, setFacetId, refetch, facetId, selectedFacets: facetIdArray, setSelectedFacets: setSelectedFacets }) => {
    const [unFolded, setUnfolded] = useState(false)

    return (
        <VStack align="inherit" w="175px">
            <CustomLink onClick={() => setUnfolded(!unFolded)} href="" _hover={{ textDecor: "none" }} transition=".5s">
                <HStack py="2">
                    {unFolded ? <BiArrowFromTop fontSize="21px" /> : <BiArrowFromLeft fontSize="21px" />}
                    <Heading as="h4" fontSize="lg">{formatFirstLetterToUppercase(facet.name)}</Heading>
                </HStack>
            </CustomLink>
            <Box>
                {facet.values.map((item, index) => {

                    return (
                        <FilterFoldedChecker key={"FilterFolded" + item && index + item.id} unFolded={unFolded} refetch={() => refetch} item={item} setSelectedFacets={setSelectedFacets} setFacetId={setFacetId} selectedFacets={facetIdArray} index={index} length={facet.values.length} facetId={facetId}></FilterFoldedChecker>
                    )
                }
                )
                }
            </Box>
        </VStack>
    )
}

export default FilterFolded