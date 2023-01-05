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
    setFacetId: (id: number | null | Array<number>) => void,
    refetch: () => void,
    facetId: number | null | Array<number>

}> = ({ facet, setFacetId, refetch, facetId }) => {
    const [unFolded, setUnfolded] = useState(false)
    const [facetIdArray, setFacetIdArray] = useState([-1])

    return (
        <VStack align="inherit" w="175px">
            <CustomLink onClick={() => setUnfolded(!unFolded)} href="" _hover={{ textDecor: "none" }} transition=".5s">
                <HStack py="2">
                    {unFolded ? <BiArrowFromTop fontSize="21px" /> : <BiArrowFromLeft fontSize="21px" />}
                    <Heading as="h4" fontSize="lg">{formatFirstLetterToUppercase(facet.name)}</Heading>
                </HStack>
            </CustomLink>
            <Box>
                {unFolded && facet.values.map((item, index) => {

                    return (
                        <FilterFoldedChecker key={"FilterFolded" + item && index + item.id} item={item} setFacetIdArray={setFacetIdArray} setFacetId={setFacetId} facetIdArray={facetIdArray} index={index} length={facet.values.length} facetId={facetId}></FilterFoldedChecker>
                    )
                }
                )
                }
            </Box>
        </VStack>
    )
}

export default FilterFolded